"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { toast } from "sonner";

const CreateBudget = ({ refreshData }) => {
  const [emojiIcon, setEmojiIcon] = useState("😊");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { user } = useUser();

  const onCreateBudget = async () => {
    const result = await db
      .insert(Budgets)
      .values({
        name: name,
        amount: amount,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        icon: emojiIcon,
      })
      .returning({ insertedId: Budgets.id });

    if (result) {
      refreshData();
      toast("New Budget Created!");
      setAmount(0);
      setName("");
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className=" bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 cursor-pointer hover:shadow-md">
            <h2 className=" font-bold text-3xl">+</h2>
            <h2 className=" font-bold">Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <div className=" mt-5">
              <Button
                onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                variant="outline"
                size="lg"
              >
                {emojiIcon}
              </Button>
              <div className=" absolute z-50">
                <EmojiPicker
                  open={openEmojiPicker}
                  onEmojiClick={(e) => {
                    setEmojiIcon(e.emoji);
                    setOpenEmojiPicker(false);
                  }}
                />
              </div>
              <div className=" mt-2">
                <h2 className=" text-black font-medium my-1">Budget Name</h2>
                <Input
                  placeholder="e.g. Home Decor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className=" mt-2">
                <h2 className=" text-black font-medium my-1">Budget Amount</h2>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g. 5000$"
                />
              </div>
            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(name && amount)}
                onClick={() => onCreateBudget()}
                className="mt-5 w-full"
              >
                Create Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateBudget;
