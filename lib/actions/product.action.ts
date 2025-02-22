'use server';
import {prisma} from "@/db/prisma"
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
//Get Latest Products

export async function getLatestProducts() {
   
      const data = await prisma.product.findMany({
            take: LATEST_PRODUCTS_LIMIT,
            orderBy:{createdAt:'desc'}
      })

      return convertToPlainObject(data);
}

//Get Single Product By it's Slug

export async function getProductBySlug(slug: string) {
      return await prisma.product.findFirst({
            where: {slug: slug},
      })
}