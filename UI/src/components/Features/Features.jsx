import styles from "./Features.module.css";
import { SlPresent } from "react-icons/sl";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdOutlineVideoSettings } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";

const Features = () => {
  return (
    <>
      <div id="features" class="container">
        <h3 className="text-center display-6 md-display-6 align-self-center mb-4 text-muted">
          Our Features
        </h3>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div
              class={`card h-100 d-flex flex-column py-4 px-2 ${styles.animat}`}
            >
              <div class="card-body text-center">
                <div className={styles.icon}>
                  <SlPresent size={30} />
                </div>
                <h5 class="card-title ">Free Plan</h5>
                <p class="card-text ">
                  Enjoy basic access to our gym facilities with the Free Plan.
                  This plan is perfect for beginners looking to explore our gym
                  and get started on their fitness journey
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div
              class={`card h-100 d-flex flex-column py-4 px-2 ${styles.animat}`}
            >
              <div class="card-body text-center">
                <div className={styles.icon}>
                  <MdOutlineFolderSpecial size={39} />
                </div>
                <h5 class="card-title ">Gold Plan</h5>
                <p class="card-text ">
                  Unleash an enhanced fitness journey with our Gold Plan—premium
                  membership, exclusive benefits, and accelerated progress
                  towards your fitness goals and overall well-being.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div
              class={`card h-100 d-flex flex-column py-4 px-2 ${styles.animat}`}
            >
              <div class="card-body text-center">
                <div className={styles.icon}>
                  <MdOutlineDashboardCustomize size={39} />
                </div>
                <h5 class="card-title ">Custom Workout Planning</h5>
                <p class="card-text ">
                  Elevate your fitness with Custom Workout Planning. Our
                  trainers craft personalized plans tailored to your goals and
                  preferences, taking your journey to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div
              class={`card h-100 d-flex flex-column py-4 px-2 ${styles.animat}`}
            >
              <div class="card-body text-center">
                <div className={styles.icon}>
                  <FaRegCommentDots size={39} />
                </div>
                <h5 class="card-title ">Communication & Encouragement</h5>
                <p class="card-text ">
                  Stay motivated with our Communication and Encouragement
                  feature. Get updates, inspiration, and community support for a
                  consistent boost on your fitness journey.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div
              class={`card h-100 d-flex flex-column py-4 px-2 ${styles.animat}`}
            >
              <div class="card-body text-center">
                <div className={styles.icon}>
                  <MdOutlineVideoSettings size={39} />
                </div>
                <h5 class="card-title ">Learning & Resources</h5>
                <p class="card-text ">
                  Expand your knowledge and enhance your workouts with our
                  Learning and Resources feature. videos, tutorials, and
                  resources to optimize your fitness routine.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div
              class={`card h-100 d-flex flex-column py-4 px-2 ${styles.animat}`}
            >
              <div class="card-body text-center">
                <div className={styles.icon}>
                  <GrDocumentPerformance size={35} />
                </div>
                <h5 class="card-title ">Performance Analysis</h5>
                <p class="card-text ">
                  Maximize your results with our Performance Analysis feature.
                  Our advanced tracking tools and expert analysis help you
                  understand and improve your fitness performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Features;
