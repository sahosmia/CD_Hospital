import React from "react";
import { getDoners } from "@/actions/donerActions";
import DonerTable from "../../_component/blood-group/DonerTable";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaPlus } from "react-icons/fa";

const DonerLists = async () => {
  const donerLists = await getDoners();

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h3>Donar Lists</h3>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex gap-2">
              <FaPlus />
              Add Doner
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Doner</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when youre done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  // defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  // defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Doner</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <DonerTable data={donerLists || []} />
    </>
  );
};

export default DonerLists;
