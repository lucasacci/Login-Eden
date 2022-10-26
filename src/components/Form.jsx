import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Form = () => {


  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/form2");
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%" }}
    >
      <div>
        <h3 className="text-center">Welcome! First things first...</h3>
        <h6 className="text-secondary text-center my-1">
          You can always change them later.
        </h6>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="column divColumn">
          <div className="mt-5">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={"Steve Jobs"}
                  required
                  minLength={2}
                  maxLength={20}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Display Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={"Steve"}
                  required
                  minLength={2}
                  maxLength={10}
                />
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
