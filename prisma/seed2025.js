async function seedConferences() {
    try {

      await prisma.conferences.create({
        data: {
          date: new Date(2025, 7, 22, 17),
          registrationCutoff: new Date(2025, 7, 19, 17),
          locationName: "Camp Farnsworth",
          locationLat: 43.826012776791224,
          locationLong: -72.23845628850779
        },
      });
      const cons = await prisma.conferences.findMany();
      console.log("Seeded 2025 Conference successfully", cons);
    } catch (error) {
      console.error("Error during 2025 Conference seeding:", error);
    } finally {
      await prisma.$disconnect();
    }
  }
  async function seedDatabase() {
    try {
      await seedConferences();
      await seedUsers();
      console.log("2025 Database seeding completed successfully");
    } catch (error) {
      console.error("Error during 2025 database seeding:", error);
    } finally {
      await prisma.$disconnect();
    }
  }
  seedDatabase();
