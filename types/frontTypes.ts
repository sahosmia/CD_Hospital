import { ObjectId } from "mongoose";

export type bloodGroupPropsType = { id: ObjectId; name: string };
export type bloodGroupsPropsType = bloodGroupPropsType[];
