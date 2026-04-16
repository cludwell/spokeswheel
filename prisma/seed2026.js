import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedConferences() {
  try {
    const conference = await prisma.conferences.create({
      data: {
        date: new Date(2026, 7, 14, 17),
        registrationCutoff: new Date(2026, 7, 14, 17),
        locationName: "Camp Seawood",
        locationLat: 43.826012776791224,
        locationLong: -72.23845628850779,
      },
    });

    const cons = await prisma.conferences.findMany();
    console.log("Seeded 2026 Conference successfully", cons);

    await prisma.bookings.create({
      data: {
        user: {
          connect: { id: 1 },
        },
        conference: {
          connect: { id: conference.id },
        },
        emergencyName: "Kathy Ludwell",
        emergencyNumber: "555-123-4567",
        emergencyRelation: "Step Mom",
        lodging: "Lodge",
        photoConsent: true,
        paid: true,
        paymentAmount: 220,
        emailList: true,
        textUpdates: true,
        dietaryRestrictions: "Vegan",
        allergies: "N/A",
        notes: "Staff",
      },
    });
  } catch (error) {
    console.error("Error during 2026 Conference seeding:", error);
  }
}
async function seedDatabase() {
  try {
    await seedConferences();
    // await seedUsers();
    console.log("2026 Database seeding completed successfully");
  } catch (error) {
    console.error("Error during 2026 database seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}
seedDatabase();
