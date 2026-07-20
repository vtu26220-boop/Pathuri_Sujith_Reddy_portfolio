import {
  createContext,
  useEffect,
  useRef,
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

export const PortfolioContext = createContext(null);

const STORAGE_KEY = "sujithPortfolioData";

const PORTFOLIO_COLLECTION = "portfolio";
const PORTFOLIO_DOCUMENT = "main";

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

function getLocalData() {
  try {
    const savedData =
      localStorage.getItem(STORAGE_KEY);

    if (!savedData) {
      return createDefaultData();
    }

    const parsedData =
      JSON.parse(savedData);

    return {
      ...createDefaultData(),
      ...parsedData,

      profile: {
        ...(initialPortfolioData.profile || {}),
        ...(parsedData.profile || {}),
      },

      projects:
        parsedData.projects ??
        initialPortfolioData.projects ??
        [],

      education:
        parsedData.education ??
        initialPortfolioData.education ??
        [],

      skills:
        parsedData.skills ??
        initialPortfolioData.skills ??
        {},

      certificates:
        parsedData.certificates ??
        initialPortfolioData.certificates ??
        [],

      certifications:
        parsedData.certifications ??
        initialPortfolioData.certifications ??
        [],

      messages:
        parsedData.messages ??
        initialPortfolioData.messages ??
        [],
    };
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
  const [portfolioData, setPortfolioData] =
    useState(getLocalData);

  const [loading, setLoading] =
    useState(true);

  const initialized =
    useRef(false);

  const portfolioRef = doc(
    db,
    PORTFOLIO_COLLECTION,
    PORTFOLIO_DOCUMENT
  );

  /*
   * FIRST LOAD
   *
   * If Firestore is empty:
   * upload the current browser's localStorage data.
   *
   * If Firestore already contains data:
   * load Firestore data.
   */
  useEffect(() => {
    const initializePortfolio =
      async () => {
        try {
          const snapshot =
            await getDoc(portfolioRef);

          if (snapshot.exists()) {
            const firebaseData =
              snapshot.data();

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

            console.log(
              "Existing portfolio uploaded to Firebase."
            );
          }

          initialized.current = true;
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
   * REAL-TIME FIREBASE LISTENER
   *
   * Any update made from one browser
   * will automatically appear in
   * another browser.
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
            snapshot.data();

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

    return () =>
      unsubscribe();
  }, []);

  /*
   * Save complete portfolio
   */
  const savePortfolio =
    async (updatedData) => {
      try {
        setPortfolioData(
          updatedData
        );

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(
            updatedData
          )
        );

        await setDoc(
          portfolioRef,
          updatedData
        );
      } catch (error) {
        console.error(
          "Failed to save portfolio:",
          error
        );
      }
    };

  /*
   * Update Profile
   */
  const updateProfile = (
    updatedProfile
  ) => {
    const updatedData = {
      ...portfolioData,

      profile: {
        ...portfolioData.profile,
        ...updatedProfile,
      },
    };

    savePortfolio(updatedData);
  };

  /*
   * Education
   */
  const setEducation = (
    education
  ) => {
    savePortfolio({
      ...portfolioData,
      education,
    });
  };

  /*
   * Skills
   */
  const setSkills = (skills) => {
    savePortfolio({
      ...portfolioData,
      skills,
    });
  };

  /*
   * Projects
   */
  const setProjects = (
    projects
  ) => {
    savePortfolio({
      ...portfolioData,
      projects,
    });
  };

  /*
   * Certificates
   */
  const setCertificates = (
    certificates
  ) => {
    savePortfolio({
      ...portfolioData,
      certificates,
    });
  };

  /*
   * Certifications
   */
  const setCertifications = (
    certifications
  ) => {
    savePortfolio({
      ...portfolioData,
      certifications,
    });
  };

  /*
   * Messages
   */
  const setMessages = (
    messages
  ) => {
    savePortfolio({
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