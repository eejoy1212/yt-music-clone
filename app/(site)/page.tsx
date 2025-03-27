import { sleep } from "@/lib/utils";
import Image from "next/image";

const page=async()=>{
  console.log("before homepage sleep...")
  await sleep(4000);
   console.log("after homepage sleep...")
  return <div>홈페이지</div>
}
export default page;