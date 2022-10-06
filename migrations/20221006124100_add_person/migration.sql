-- CreateTable
CREATE TABLE "Person" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
