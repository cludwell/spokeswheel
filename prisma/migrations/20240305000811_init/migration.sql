-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "hashedPassword" VARCHAR(255) NOT NULL,
    "dateOfBirth" TIMESTAMPTZ NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "conferenceId" INTEGER NOT NULL,
    "photoConsent" BOOLEAN,
    "paid" BOOLEAN,
    "emergencyName" VARCHAR(255) NOT NULL,
    "emergencyNumber" VARCHAR(255) NOT NULL,
    "emergencyRelation" VARCHAR(255) NOT NULL,
    "emailList" BOOLEAN,
    "textUpdates" BOOLEAN,
    "dietaryRestrictions" VARCHAR(255),
    "allergies" TEXT,
    "notes" TEXT,
    "specialAccomodations" TEXT,
    "lodging" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conferences" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "registrationCutoff" TIMESTAMP(3) NOT NULL,
    "locationName" VARCHAR(255) NOT NULL,
    "locationLat" DOUBLE PRECISION NOT NULL,
    "locationLong" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "conferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_conferenceId_fkey" FOREIGN KEY ("conferenceId") REFERENCES "conferences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
