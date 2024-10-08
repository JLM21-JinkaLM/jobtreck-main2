import React, { useState, useEffect } from 'react';

export interface JobDetails {
  id?: string; // Optional for new job creation, required for editing
  title: string;
  description: string;
  location: string;
  salary: string;
  skills: string;
  category: string;
  dateOfPost: string;
  lastDate: string;
}

interface JobFormProps {
  onSubmit: (jobDetails: JobDetails, resetForm: () => void) => void;
  initialJob?: JobDetails; // Initial job details for editing
}

const JobForm: React.FC<JobFormProps> = ({ onSubmit, initialJob }) => {
  const [jobDetails, setJobDetails] = useState<JobDetails>({
    id: initialJob?.id || '',
    title: initialJob?.title || '',
    description: initialJob?.description || '',
    location: initialJob?.location || '',
    salary: initialJob?.salary || '',
    skills: initialJob?.skills || '',
    category: initialJob?.category || '',
    dateOfPost: initialJob?.dateOfPost || '',
    lastDate: initialJob?.lastDate || '',
  });

  const [errors, setErrors] = useState<Partial<JobDetails>>({});

  useEffect(() => {
    if (initialJob) {
      setJobDetails(initialJob);
    }
  }, [initialJob]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error for the field being edited
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(jobDetails, resetForm);
    }
  };

  const validate = () => {
    const newErrors: Partial<JobDetails> = {};

    if (!jobDetails.title.trim()) newErrors.title = 'Job title is required';
    if (!jobDetails.description.trim()) newErrors.description = 'Job description is required';
    if (!jobDetails.location.trim()) newErrors.location = 'Job location is required';
    if (!jobDetails.salary.trim()) newErrors.salary = 'Salary is required';
    if (!jobDetails.skills.trim()) newErrors.skills = 'Skills are required';
    if (!jobDetails.category.trim()) newErrors.category = 'Category is required';

    const currentDate = new Date().toISOString().split('T')[0];
    if (!jobDetails.dateOfPost || jobDetails.dateOfPost > currentDate) {
      newErrors.dateOfPost = 'Invalid date of post';
    }
    if (!jobDetails.lastDate || jobDetails.lastDate < currentDate) {
      newErrors.lastDate = 'Invalid last date';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setJobDetails({
      id: '',
      title: '',
      description: '',
      location: '',
      salary: '',
      skills: '',
      category: '',
      dateOfPost: '',
      lastDate: '',
    });
    setErrors({});
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2>{initialJob ? 'Edit Job' : 'Post a Job'}</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={jobDetails.title}
                    onChange={handleChange}
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    placeholder="Enter job title"
                  />
                  {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Job Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={jobDetails.description}
                    onChange={handleChange}
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    rows={3}
                    placeholder="Enter job description"
                  />
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={jobDetails.location}
                    onChange={handleChange}
                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                    placeholder="Enter job location"
                  />
                  {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="salary" className="form-label">
                    Salary
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={jobDetails.salary}
                    onChange={handleChange}
                    className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                    placeholder="Enter job salary"
                  />
                  {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="skills" className="form-label">
                    Skills
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={jobDetails.skills}
                    onChange={handleChange}
                    className={`form-control ${errors.skills ? 'is-invalid' : ''}`}
                    placeholder="Enter required skills"
                  />
                  {errors.skills && <div className="invalid-feedback">{errors.skills}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={jobDetails.category}
                    onChange={handleChange}
                    className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                    placeholder="Enter job category"
                  />
                  {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="dateOfPost" className="form-label">
                    Date of Post
                  </label>
                  <input
                    type="date"
                    id="dateOfPost"
                    name="dateOfPost"
                    value={jobDetails.dateOfPost}
                    onChange={handleChange}
                    className={`form-control ${errors.dateOfPost ? 'is-invalid' : ''}`}
                    placeholder="Enter date of job posting"
                  />
                  {errors.dateOfPost && <div className="invalid-feedback">{errors.dateOfPost}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="lastDate" className="form-label">
                    Last Date
                  </label>
                  <input
                    type="date"
                    id="lastDate"
                    name="lastDate"
                    value={jobDetails.lastDate}
                    onChange={handleChange}
                    className={`form-control ${errors.lastDate ? 'is-invalid' : ''}`}
                    placeholder="Enter last date to apply"
                  />
                  {errors.lastDate && <div className="invalid-feedback">{errors.lastDate}</div>}
                </div>

                <button type="submit" className="btn btn-primary">
                  {initialJob ? 'Update Job' : 'Create Job'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
