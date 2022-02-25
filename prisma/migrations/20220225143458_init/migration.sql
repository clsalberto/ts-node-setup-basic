-- CreateTable
CREATE TABLE "Users" (
    "id" UUID NOT NULL,
    "imageId" UUID,
    "name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "password" VARCHAR(120) NOT NULL,
    "token" VARCHAR(60),
    "expiredIn" TIMESTAMP(3),
    "createdIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roleId" UUID NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" UUID NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "path" VARCHAR NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acounts" (
    "id" UUID NOT NULL,
    "imageId" UUID,
    "company" VARCHAR(80) NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "cnpj" VARCHAR(30) NOT NULL,
    "domain" VARCHAR(30) NOT NULL,
    "createdIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Acounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" UUID NOT NULL,
    "slug" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" TEXT,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modules" (
    "id" UUID NOT NULL,
    "owner" UUID,
    "slug" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" TEXT,
    "value" INTEGER,

    CONSTRAINT "Modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AcountToUser" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_ModuleToRole" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_token_key" ON "Users"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Acounts_email_key" ON "Acounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Acounts_domain_key" ON "Acounts"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "_AcountToUser_AB_unique" ON "_AcountToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AcountToUser_B_index" ON "_AcountToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ModuleToRole_AB_unique" ON "_ModuleToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_ModuleToRole_B_index" ON "_ModuleToRole"("B");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acounts" ADD CONSTRAINT "Acounts_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modules" ADD CONSTRAINT "Modules_owner_fkey" FOREIGN KEY ("owner") REFERENCES "Modules"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AcountToUser" ADD FOREIGN KEY ("A") REFERENCES "Acounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AcountToUser" ADD FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToRole" ADD FOREIGN KEY ("A") REFERENCES "Modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToRole" ADD FOREIGN KEY ("B") REFERENCES "Roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
