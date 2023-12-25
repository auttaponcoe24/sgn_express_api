// const prisma = require("../models/prisma");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAllPopulation = async (req, res, next) => {
	try {
		const populationAll = await prisma.population.findMany({
			select: {
				Country_name: true,
				Year: true,
				Population: true,
			},
			orderBy: {
				Population: "desc",
			},
		});

		res.status(200).json({ message: "get All", populationAll });
	} catch (err) {
		next(err);
	}
};
