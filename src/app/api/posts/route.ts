import { prisma } from "@/prisma"
import { auth } from "@clerk/nextjs/server"
import { NextRequest } from "next/server"
import { resolve } from "path"

export async function GET(request:NextRequest) {
    
    const searchParams = request.nextUrl.searchParams
    const userProfileId = searchParams.get("user")
    const page = searchParams.get("cursor")
    const Limit = 3
    const {userId} = await auth()
      
      if(!userId) return
      const whereCondition = userProfileId? {parentPostId:null,userId:userProfileId} : {
        parentPostId:null,
        userId:{
        in:[userId,...(await prisma.follow.findMany({where:{followerId:userId},select:{followingId:true}})).map(follow=>follow.followingId)]
      }}
    
      
      const posts = await prisma.post.findMany(
        {where:whereCondition,
        take:Limit,
        skip:(Number(page) - 1) * Limit
    })
    const totalPosts = await prisma.post.count({where:whereCondition})
    const hasMore = Number(page) * Limit< totalPosts;
    await new Promise(resolve=>setTimeout(resolve,3000))
       return Response.json({posts,hasMore})
}