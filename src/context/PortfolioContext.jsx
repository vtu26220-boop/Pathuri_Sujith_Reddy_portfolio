import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { initialPortfolioData } from "../data/initialData";

export const PortfolioContext =
  createContext(null);

const STORAGE_KEY =
  "sujithPortfolioData";

const PORTFOLIO_COLLECTION =
  "portfolio";

const PORTFOLIO_DOCUMENT =
  "main";

/*
 * Create default portfolio data
 */
function createDefaultData() {
  return {
    ...initialPortfolioData,

    profile: {
      ...(initialPortfolioData.profile || {}),
    },

    projects:
      initialPortfolioData.projects || [],

    education:
      initialPortfolioData.education || [],

    skills:
      initialPortfolioData.skills || {},

    certificates:
      initialPortfolioData.certificates || [],

    certifications:
      initialPortfolioData.certifications || [],

    messages:
      initialPortfolioData.messages || [],
  };
}

/*
 * Merge saved/Firebase data with defaults.
 *
 * This prevents missing fields from
 * breaking the portfolio.
 */
function mergePortfolioData(data = {}) {
  return {
    ...createDefaultData(),
    ...data,

    profile: {
      ...(initialPortfolioData.profile || {}),
      ...(data.profile || {}),
    },

    projects:
      data.projects ??
      initialPortfolioData.projects ??
      [],

    education:
      data.education ??
      initialPortfolioData.education ??
      [],

    skills:
      data.skills ??
      initialPortfolioData.skills ??
      {},

    certificates:
      data.certificates ??
      initialPortfolioData.certificates ??
      [],

    certifications:
      data.certifications ??
      initialPortfolioData.certifications ??
      [],

    messages:
      data.messages ??
      initialPortfolioData.messages ??
      [],
  };
}

/*
 * Read portfolio from localStorage
 */
function getLocalData() {
  try {
    const savedData =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!savedData) {
      return createDefaultData();
    }

    const parsedData =
      JSON.parse(savedData);

    return mergePortfolioData(
      parsedData
    );
  } catch (error) {
    console.error(
      "Failed to read local portfolio:",
      error
    );

    return createDefaultData();
  }
}

function PortfolioProvider({
  children,
}) {
  const [
    portfolioData,
    setPortfolioData,
  ] = useState(getLocalData);

  const [loading, setLoading] =
    useState(true);

  const portfolioRef = doc(
    db,
    PORTFOLIO_COLLECTION,
    PORTFOLIO_DOCUMENT
  );

  /*
   * Initial Firestore load
   */
  useEffect(() => {
    const initializePortfolio =
      async () => {
        try {
          const snapshot =
            await getDoc(
              portfolioRef
            );

          if (snapshot.exists()) {
            const firebaseData =
              mergePortfolioData(
                snapshot.data()
              );

            setPortfolioData(
              firebaseData
            );

            localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify(
                firebaseData
              )
            );
          } else {
            const localData =
              getLocalData();

            await setDoc(
              portfolioRef,
              localData
            );

            setPortfolioData(
              localData
            );

            localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify(
                localData
              )
            );

            console.log(
              "Portfolio created in Firebase."
            );
          }
        } catch (error) {
          console.error(
            "Firebase initialization error:",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    initializePortfolio();
  }, []);

  /*
   * Real-time Firestore listener
   */
  useEffect(() => {
    const unsubscribe =
      onSnapshot(
        portfolioRef,

        (snapshot) => {
          if (!snapshot.exists()) {
            return;
          }

          const firebaseData =
            mergePortfolioData(
              snapshot.data()
            );

          setPortfolioData(
            firebaseData
          );

          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(
              firebaseData
            )
          );
        },

        (error) => {
          console.error(
            "Firebase listener error:",
            error
          );
        }
      );

    return () => {
      unsubscribe();
    };
  }, []);

  /*
   * Save complete portfolio
   */
  const savePortfolio =
    async (updatedData) => {
      try {
        const cleanData =
          mergePortfolioData(
            updatedData
          );

        /*
         * Update screen immediately
         */
        setPortfolioData(
          cleanData
        );

        /*
         * Save locally
         */
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(
            cleanData
          )
        );

        /*
         * Save permanently to Firestore
         */
        await setDoc(
          portfolioRef,
          cleanData
        );

        return true;
      } catch (error) {
        console.error(
          "Failed to save portfolio:",
          error
        );

        /*
         * Important:
         * Send the error back to the
         * admin page.
         */
        throw error;
      }
    };

  /*
   * Update Profile
   *
   * Resume link is also saved here.
   */
  const updateProfile =
    async (updatedProfile) => {
      const updatedData = {
        ...portfolioData,

        profile: {
          ...(portfolioData.profile ||
            {}),
          ...updatedProfile,
        },
      };

      await savePortfolio(
        updatedData
      );

      return true;
    };

  /*
   * Update Education
   */
  const setEducation =
    async (education) => {
      await savePortfolio({
        ...portfolioData,
        education,
      });
    };

  /*
   * Update Skills
   */
  const setSkills =
    async (skills) => {
      await savePortfolio({
        ...portfolioData,
        skills,
      });
    };

  /*
   * Update Projects
   */
  const setProjects =
    async (projects) => {
      await savePortfolio({
        ...portfolioData,
        projects,
      });
    };

  /*
   * Update Certificates
   */
  const setCertificates =
    async (certificates) => {
      await savePortfolio({
        ...portfolioData,
        certificates,
      });
    };

  /*
   * Update Certifications
   */
  const setCertifications =
    async (certifications) => {
      await savePortfolio({
        ...portfolioData,
        certifications,
      });
    };

  /*
   * Update Messages
   */
  const setMessages =
    async (messages) => {
      await savePortfolio({
        ...portfolioData,
        messages,
      });
    };

  /*
   * Reset Portfolio
   */
  const resetPortfolio =
    async () => {
      const defaultData =
        createDefaultData();

      await savePortfolio(
        defaultData
      );
    };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        loading,

        setPortfolioData,
        updateProfile,

        setEducation,
        setSkills,
        setProjects,

        setCertificates,
        setCertifications,

        setMessages,

        resetPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;