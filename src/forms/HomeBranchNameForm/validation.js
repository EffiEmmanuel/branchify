import * as Yup from "yup";

const HomeBranchNameSchema = Yup.object().shape({
  branchName: Yup.string()
    .min(1, "Branch name must be longer than 1 character")
    .required("This is a required field"),
});

export default HomeBranchNameSchema;
