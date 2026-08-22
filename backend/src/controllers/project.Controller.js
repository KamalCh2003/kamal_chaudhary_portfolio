import { prisma } from '../config/database.js';
import { projectSchema } from '../utils/validation.js';

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(projects);
  } catch (err) { next(err); }
};

export const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.findUnique({ where: { id: Number(id) } });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) { next(err); }
};

// (Optional) create/update/delete – not needed for a portfolio but can be added.