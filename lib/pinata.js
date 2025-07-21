"use server";
import { PinataSDK } from "pinata";

export async function  getPinata() {
  return new PinataSDK({
    pinataJWTKey: process.env.PINATA_JWT,
    pinataGateway: process.env.PINATA_GATEWAY_URL,
  });
}