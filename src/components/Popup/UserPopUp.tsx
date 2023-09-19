import { Signal, useSignal } from "@preact/signals";
import Button from "../Button";
import Typography from "../Typography";
import { ChangeEvent } from "preact/compat";
import { MutableRef, useEffect } from "preact/hooks";
import { Customer, User } from "@medusajs/medusa";
import NewInput from "../Input/NewInput";
import { adminGetCustomer } from "@/api/admin/customers/getCustomer";
import { adminGetuser } from "@/api/admin/adminUsers/getAdminUser";

type PopUp = {
  isPopup: Signal<boolean>;
  actionText: string;
  formRef: MutableRef<HTMLFormElement>;
  handlePopupAction?: (e: ChangeEvent<HTMLFormElement>) => void;
  errorMessage: Signal<string | null>;
  type: "add" | "edit";
  variant: "adminUser" | "user";
  selectedId?: string;
};

const UserPopUp = ({
  isPopup,
  handlePopupAction,
  formRef,
  actionText,
  errorMessage,
  selectedId,
  type,
  variant,
}: PopUp) => {
  const isLoading = useSignal<boolean>(false);
  const user = useSignal<Customer | User | null>(null);

  const getUser = async () => {
    isLoading.value = true;
    if (!selectedId?.length) return;
    try {
      const userRes =
        variant === "user"
          ? await adminGetCustomer({
              customerId: selectedId,
            })
          : await adminGetuser({
              userId: selectedId,
            });

      user.value = variant === "user" ? userRes?.customer : userRes?.user;
    } catch (error) {
    } finally {
      isLoading.value = undefined;
    }
  };

  useEffect(() => {
    if (type === "edit") {
      getUser();
    }
  }, [selectedId]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full backdrop-brightness-75 items-center justify-center ${
        isPopup.value ? "flex " : "hidden"
      }`}
    >
      {/* close on outside click */}
      <div
        className="block w-full h-full"
        onClick={() => (isPopup.value = false)}
      />
      <div
        className={`absolute w-10/12 bg-secondray  rounded-2xl transition-all p-6`}
      >
        <Typography size="body1/semi-bold" className="capitalize">
          {type === "add" ? "Add" : "Update"} User
        </Typography>

        <form onSubmit={handlePopupAction} ref={formRef} required>
          <div className="flex flex-col gap-4 items-center justify-center w-full my-4">
            {type === "edit" ? (
              <Typography>Email: {user.value?.email}</Typography>
            ) : null}
            <NewInput
              name="first_name"
              label="First Name"
              type="text"
              defaultValue={type === "edit" ? user.value?.first_name : ""}
              required
            />
            <NewInput
              name="last_name"
              label="Last Name"
              type="text"
              defaultValue={type === "edit" ? user.value?.last_name : ""}
              required
            />
            {type === "add" ? (
              <>
                <NewInput
                  type="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  required
                />

                <NewInput
                  type="password"
                  label="Password"
                  name="password"
                  autocomplete="current-password"
                  placeholder="Add new password"
                  required
                />
              </>
            ) : null}
          </div>
          <div className="w-full flex items-center justify-evenly">
            <Button
              type="submit"
              className={`capitalize ${actionText ? "flex" : "hidden"}`}
              disabled={isLoading.value}
            >
              {isLoading.value ? "loading..." : actionText}
            </Button>

            <Button
              type="button"
              variant="danger"
              onClick={() => (isPopup.value = false)}
            >
              Close
            </Button>
          </div>
          {errorMessage.value ? (
            <Typography variant="error" className="text-center mt-2">
              {errorMessage.value}
            </Typography>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default UserPopUp;