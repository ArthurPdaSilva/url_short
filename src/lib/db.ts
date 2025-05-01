import { PrismaClient } from "@/generated/prisma/client";
import Redis from "ioredis";

export const prisma = new PrismaClient();

export const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: 6379,
  db: 0,
});
