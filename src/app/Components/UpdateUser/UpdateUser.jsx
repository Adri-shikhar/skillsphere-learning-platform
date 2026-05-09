"use client";

import { useRef } from "react";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  useOverlayState,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function UpdateUser() {
  const ModalState = useOverlayState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem("name")?.value;
    const link = form.elements.namedItem("link")?.value;
    console.log(name, link);


    const { error } = await authClient.updateUser({
    image: link,
    name: name,
})
if (error) {
    toast.error(error.message || "Failed to update user");
    return;
}
toast.success("User updated successfully");
    ModalState.close();
    form.reset();
  };

  return (
    <Modal state={ModalState}>
      <Modal.Trigger className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/45 bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 shadow-lg shadow-black/15 outline-none transition hover:border-white/70 hover:bg-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-600">
        Update user
      </Modal.Trigger>
      <Modal.Backdrop className="z-100">
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-2xl font-bold">
                Update user
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below to update your information. The modal
                adapts when the keyboard opens on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit}>
                  <TextField className="w-full" name="name" isRequired>
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="link" isRequired>
                    <Label>Profile Picture URL</Label>
                    <Input placeholder="Enter your URL for profile picture" type="link" />
                  </TextField>
                  <Modal.Footer className="mt-4">
                    <div className="flex justify-end gap-2">
                      <Button slot="close" variant="outline">
                        Close
                      </Button>
                      <Button  type="submit" 
                      variant="primary">
                        Update user
                      </Button>
                    </div>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
