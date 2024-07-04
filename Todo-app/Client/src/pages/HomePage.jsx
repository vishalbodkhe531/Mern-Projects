import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../components/Home";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Todo from "../components/Todo";
import { InputData } from "../app/features/userSlice";
import { API } from "../main";

function HomePage() {
  // const dispatch = useDispatch();

  // let [formData, setFormData] = useState("");

  // const handleChange = (e) => {
  //   setFormData(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const data = await fetch("/api/todo/task", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "Application/json",
  //       },
  //       body: JSON.stringify({ title: formData }),
  //     });

  //     const result = await data.json();

  //     if (result.success === false) {
  //       toast.error(result.message, {
  //         duration: 3000,
  //         style: { borderRadius: "10px", fontFamily: "cursive" },
  //       });
  //       return;
  //     }

  //     if (result) {
  //       toast.success(result.message, {
  //         duration: 3000,
  //         style: { borderRadius: "10px", fontFamily: "cursive" },
  //       });
  //       setFormData("");
  //       return;
  //     }
  //   } catch (error) {
  //     console.log(`error while fetch Todo task ${error}`);
  //   }
  // };

  const [formData, setFormData] = useState("");

  const navigator = useNavigate();

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  //     console.log(result);

  //     if (result.success === false) {
  //       return toast.error(result.message, {
  //         duration: 4000,
  //         style: { borderRadius: "10px" },
  //       });
  //     }

  //     if (result) {
  //       toast.success(result.message, {
  //         duration: 4000,
  //         style: { borderRadius: "10px" },
  //       });
  //       navigator("/task");
  //     }
  //   } catch (error) {
  //     console.log(`Error while fetch Todo Task : ${error}`);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await fetch(`${API}/api/todo/task`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      credentials : "include",
      body: JSON.stringify({ title: formData }),
    });

    const result = await data.json();
    console.log(result);

    if (result.success === false) {
      return toast.error(result.message, {
        duration: 4000,
        style: { borderRadius: "10px" },
      });
    }

    if (result) {
      toast.success(result.message, {
        duration: 4000,
        style: { borderRadius: "10px" },
      });
      setFormData("");
      return;
    }
  };
  return (
    <>
      {currentUser ? (
        <div>
          <div
            className="h-[100vh] bg-cover"
            style={{
              backgroundImage:
                "url(https://png.pngtree.com/thumb_back/fh260/background/20231211/pngtree-christmas-mosk-up-wish-list-on-purple-background-notebook-todo-list-image_15497116.jpg)",
              backgroundPosition: "center",
            }}
          >
            <div className="h-full" style={{ background: "rgba(0,0,0,0.4)" }}>
              <form
                className="flex justify-center items-center font-[cursive]"
                onSubmit={handleSubmit}
              >
                <div className="mt-[10rem] w-[40rem] h-12 bg-white flex justify-between rounded-full items-center mx-[2rem]">
                  <input
                    type="text"
                    required
                    value={formData}
                    className="mx-3 w-[80%] h-10 outline-none p-3"
                    onChange={(e) => setFormData(e.target.value)}
                  />
                  <button className="bg-orange-500 p-3 rounded-full w-[6rem]">
                    Done
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default HomePage;
