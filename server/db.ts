import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from "@shared/schema";
import { securityPolicies, threatLogs } from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL env var is not set");
}

// Initialize PostgreSQL client and Drizzle ORM
const pool = new Pool({
  connectionString: process.env.DATABASE_URL as string,
});
export const db = drizzle(pool, { schema });

export async function seedInitialData() {
  try {
    // Check if we have any security policies
    const existingPolicies = await db.select().from(securityPolicies);

    if (existingPolicies.length === 0) {
      console.log("Seeding initial security policies...");

      // Add default security policies
      await db.insert(securityPolicies).values([
        {
          name: "Enterprise Security Policy",
          enabled: true,
          categories: ["Phishing", "Malware", "Cryptomining"],
          action: "Block",
          whitelist: ["*.company.com", "*.trusted-partner.net"],
          blacklist: ["*.suspicious-domain.com"],
        },
        {
          name: "Social Media Restriction",
          enabled: false,
          categories: ["Social Media"],
          action: "Log",
          whitelist: [],
          blacklist: ["*.facebook.com", "*.twitter.com"],
        },
      ]);

      console.log("Initial security policies seeding completed");
    }

    // Check if we have any threat logs
    const existingThreats = await db.select().from(threatLogs);

    if (existingThreats.length === 0) {
      console.log("Seeding initial threat logs...");

      // Add default threat logs
      await db.insert(threatLogs).values([
        {
          domain: "malicious-phishing-bank.com",
          type: "Phishing",
          risk: "Critical",
          action: "Blocked",
          sourceIP: "198.51.100.23",
        },
        {
          domain: "crypto-miner-pool.org",
          type: "Cryptomining",
          risk: "High",
          action: "Blocked",
          sourceIP: "203.0.113.88",
        },
        {
          domain: "c2-botnet-controller.net",
          type: "C2 Communication",
          risk: "Critical",
          action: "Blocked",
          sourceIP: "192.0.2.14",
        },
        {
          domain: "suspicious-ad-network.io",
          type: "Suspicious",
          risk: "Medium",
          action: "Logged",
          sourceIP: "198.18.0.2",
        },
      ]);

      console.log("Initial threat logs seeding completed");
    }
  } catch (error) {
    console.error("Error seeding initial data:", error);
  }
}

export type DB = typeof db;