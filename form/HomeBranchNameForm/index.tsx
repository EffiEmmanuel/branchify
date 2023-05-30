import React from "react";
import { useFormik } from "formik";
import HomeBranchNameSchema from "./validation";

type Props = {
  blackButton: Boolean;
  tintInput: Boolean;
};

interface branchNameFormValues {
  branchName: string;
}

function HomeBranchNameForm({ blackButton, tintInput }: Props) {
  // Form Initial Values
  const initialValues: branchNameFormValues = { branchName: "" };

  //   Submit form handler
  const handleFormSubmit = async (values: any, actions: any) => {};

  const { values, errors, handleSubmit, isSubmitting, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: HomeBranchNameSchema,
      onSubmit: handleFormSubmit,
    });

  return (
    <form className="mt-10">
      <div className="flex flex-col gap-y-2 rounded-lg">
        {/* Input container */}
        <div
          className={`flex w-full px-3 rounded-lg ${
            tintInput ? "bg-gray-100" : "bg-white"
          }`}
        >
          <label htmlFor="branchName" className="text-black my-auto">
            branchify.io/
          </label>
          <input
            type="text"
            name="branchName"
            id="branchName"
            placeholder="johndoe"
            value={values.branchName}
            onChange={handleChange}
            className={`w-full py-5 focus:outline-0 px-2 my-auto ${tintInput && "bg-gray-100"}`}
          />
        </div>

        {/* CTA BUTTON */}
        <button
          type="submit"
          // style={{ borderRadius: '0 10px 10px 0' }}
          className={`${
            blackButton ? "bg-branchifyBlack" : "bg-blueBlack"
          } py-5 px-7 text-white rounded-lg`}
        >
          Create my free branch
        </button>
      </div>
    </form>
  );
}

export default HomeBranchNameForm;
