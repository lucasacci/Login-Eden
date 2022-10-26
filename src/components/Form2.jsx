import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { withStepProgress } from 'react-stepz';

// export default withStepProgress();

export const Form2 = () => {


  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/form3");
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%" }}
    >
      <div>
        <h3 className="text-center">Let's set up a home for all your work</h3>
        <h6 className="text-secondary text-center my-1">
          You can always create another workspace later.
        </h6>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="column divColumn">
          <div className="mt-5">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label">Workspace Name</label>
                <input
                  type="text"
                  className="form-control input"
                  placeholder={"Eden"}
                  required
                  minLength={5}
                  maxLength={20}
                />

              </div>
              <div className="mb-3">
                <div className="d-flex align-items-start">
                  <label className="form-label">Workspace URL</label>
                  <div className="form-text mx-2">(optional)</div>
                </div>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="www.eden.com/"
                    disabled
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder={"Example"}
                    minLength={5}
                    maxLength={15}
                    required
                  />
                </div>
              </div>
              <button className="btn text-light w-100" type="submit">
                Create Workspace
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
