const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedUsers() {
  try {
    await prisma.users.create({
      data: {
        firstName: "Chris",
        lastName: "Ludwell",
        email: "cludwell@gmail.com",
        hashedPassword:
          "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        dateOfBirth: new Date(1987, 2, 28),
        bookings: {
          create: [
            {
              photoConsent: true,
              paid: false,
              emergencyName: "Kathleen Ludwell",
              emergencyNumber: "352-593-5067",
              emergencyRelation: "Mother",
              emailList: true,
              textUpdates: true,
              dietaryRestrictions: "Vegan",
              allergies: "N/A",
              notes: "Staff",
              lodging: "Lodges",
              conference: {
                connect: { id: 1 },
              },
            },
          ],
        },
      },
    });
  } catch (error) {
    console.error("User 1 seeding error: ", error);
  }
  try {
    await prisma.users.create({
      data: {
        firstName: "Bryce",
        lastName: "Dagenais",
        email: "bryce.dagenais86@gmail.com",
        hashedPassword:
          "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        dateOfBirth: new Date(1986, 3, 1),
        bookings: {
          create: [
            {
              photoConsent: true,
              paid: false,
              emergencyName: "Mark Dagenais",
              emergencyNumber: "603-494-6325",
              emergencyRelation: "Father",
              emailList: true,
              textUpdates: true,
              dietaryRestrictions: "Omnivore",
              allergies: "N/A",
              notes: "Staff",
              lodging: "Lodges",
              conference: {
                connect: { id: 1 },
              },
            },
          ],
        },
      },
    });
  } catch (error) {
    console.error("User 2 seeding error: ", error);
  }
  try {
    await prisma.users.create({
      data: {
        firstName: "Matt",
        lastName: "Morin",
        email: "matthewpatrickmorin@gmail.com",
        hashedPassword:
          "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        dateOfBirth: new Date(1984, 3, 1),
        bookings: {
          create: [
            {
              photoConsent: true,
              paid: false,
              emergencyName: "Starla",
              emergencyNumber: "Need to update",
              emergencyRelation: "Partner",
              emailList: true,
              textUpdates: true,
              dietaryRestrictions: "Omnivore",
              allergies: "N/A",
              notes: "Staff",
              lodging: "Lodges",
              conference: {
                connect: { id: 1 },
              },
            },
          ],
        },
      },
    });
  } catch (error) {
    console.error("User 2 seeding error: ", error);
  }
}
async function seedConferences() {
  try {
    await prisma.conferences.create({
      data: {
        date: new Date(2024, 7, 15, 17),
        registrationCutoff: new Date(2024, 7, 12, 17),
        locationName: "Camp Seawood",
        locationLat: 43.043368704656324,
        locationLong: -70.78873188956963,
        // i don't know if the connection here will work as intended
        bookings: {
          // connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
        },
      },
    });
  } catch (error) {
    console.error("Error during Conference seeding:", error);
  }
}
async function seedDatabase() {
  try {
    await seedConferences();
    await seedUsers();
    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error during database seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}
seedDatabase();
