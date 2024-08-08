import express from "express";
import { getRepository, MoreThanOrEqual } from "typeorm";
import job_details from "../models/job_details";

const adminRouter = express.Router();

adminRouter.post("/jobcreate", async (req, res) => {
  const job_detailsRepository = getRepository(job_details);
  const {
    title,
    description,
    location,
    salary,
    skills,
    category,
    dateOfPost,
    lastDate,
  } = req.body;

  const newJob = job_detailsRepository.create({
    title,
    description,
    location,
    salary,
    skills,
    category,
    dateOfPost,
    lastDate,
  });

  try {
    await job_detailsRepository.save(newJob);
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: "Error saving job" });
  }
});

// New route to get all job details

// adminRouter.get("/jobdetails", async (req, res) => {
//   const job_detailsRepository = getRepository(job_details);
//   console.log(job_detailsRepository, "hhhhhhhhhhhhhhhh");
//   try {
//     const jobs = await job_detailsRepository.find();
//     console.log(jobs);
//     console.log("Fetched jobs:", jobs);
//     res.status(200).json(jobs);
//   } catch (error) {
//     console.error("Error fetching job details:", error);
//     res.status(500).json({ error: "Error fetching job details" });
//   }
// });
// server.use("/api/admin", adminRouter);

adminRouter.get("/jobdetails", async (_req, res) => {
  try {
    const jobRepository = getRepository(job_details);

    // Find all jobs
    const jobs = await jobRepository.find({});

    res.status(200).json({ success: true, jobs });
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).json({ success: false, msg: "Error fetching jobs" });
  }
});

adminRouter.delete("/jobdelete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const jobRepository = getRepository(job_details);

    // Delete job by id
    const result = await jobRepository.delete(id);

    if (result.affected === 1) {
      res.status(200).json({ message: "Job deleted successfully" });
    } else {
      res.status(404).json({ message: "Job not found or already deleted" });
    }
  } catch (error: any) {
    // Explicitly specify 'error' as 'any' or appropriate type
    console.error("Error deleting job:", error);
    res
      .status(500)
      .json({ message: "Error deleting job", error: error.message });
  }
});

// GET job details by ID
adminRouter.get("/job/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const jobRepository = getRepository(job_details);
    const job = await jobRepository.findOne(id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    console.error("Error fetching job details:", error);
    res.status(500).json({ error: "Failed to fetch job details" });
  }
});

// PUT update job details by ID
adminRouter.put("/jobupdate/:id", async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    location,
    salary,
    skills,
    category,
    dateOfPost,
    lastDate,
  } = req.body;
  try {
    const jobRepository = getRepository(job_details);
    let job = await jobRepository.findOne(id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    // Update job details
    job.title = title;
    job.description = description;
    job.location = location;
    job.salary = salary;
    job.skills = skills;
    job.category = category;
    job.dateOfPost = dateOfPost;
    job.lastDate = lastDate;

    await jobRepository.save(job);
    res.json({ message: "Job updated successfully", job });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({ error: "Failed to update job" });
  }
});

adminRouter.get("/totalcount", async (_req, res) => {
  try {
    const jobDetailsRepository = getRepository(job_details);
    const totalCount = await jobDetailsRepository.count();
    res.json({ count: totalCount });
  } catch (error) {
    console.error("Error fetching total job listings count:", error);
    res.status(500).json({ error: "Failed to fetch total job listings count" });
  }
});

adminRouter.get("/activejobs/count", async (_req, res) => {
  try {
    const jobDetailsRepository = getRepository(job_details);

    // Calculate today's date
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0); // Set to start of day in UTC

    // Fetch count of jobs where lastDate is greater than or equal to today
    const activeJobsCount = await jobDetailsRepository.count({
      where: {
        lastDate: MoreThanOrEqual(today.toISOString()), // Assuming lastDate is stored as ISOString
      },
    });

    res.status(200).json({ count: activeJobsCount });
  } catch (error) {
    console.error("Error fetching active jobs count:", error);
    res.status(500).json({ error: "Failed to fetch active jobs count" });
  }
});

adminRouter.get("/jobcounts", async (_req, res) => {
  try {
    const jobDetailsRepository = getRepository(job_details);

    const categories = [
      "Software Development",
      "Marketing",
      "Finance",
      "Design",
    ];
    const counts = await Promise.all(
      categories.map(async (category) => {
        const count = await jobDetailsRepository.count({ where: { category } });
        return { category, count };
      })
    );

    const jobCounts = counts.reduce((acc, { category, count }) => {
      acc[category] = count;
      return acc;
    }, {} as Record<string, number>);

    res.status(200).json({ counts: jobCounts });
  } catch (error) {
    console.error("Error fetching job counts:", error);
    res.status(500).json({ error: "Failed to fetch job counts" });
  }
});

export default adminRouter;
