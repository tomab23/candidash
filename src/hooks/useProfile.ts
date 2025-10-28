import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import type Profile from "@/models/Profile";
import {
  getProfile,
  getStatus,
  insertProfile,
  updateProfile,
} from "@/services/ProfileService";

export const useProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile>();
  const [status, setStatus] = useState<boolean>();
  const [loading, setLoading] = useState(false);

  //  récupere toutes le profile de l'utilisateur
  const fecthProfile = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const data = await getProfile(user.id);
      setProfile(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const fetchStatus = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const data = await getStatus(user.id);
      setStatus(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // ajouter un profile
  const addProfile = async (username: string, open: boolean) => {
    if (!user) return;
    await insertProfile(user.id, username, open);
    // await fetchCandidatures()
  };

  //  mettre a jour un profile
  const editProfile = useCallback(
    async (id: number, username: string, open: boolean) => {
      if (!user) return;
    try {
      await updateProfile(id, user.id, username, open);
      await fecthProfile();
    } catch (error) {
      console.error("Error edit profile", error);
      throw error; // ✅ on la relance pour que le composant puisse la gérer
    }
    },
    [user, fecthProfile]
  );

  // Effect pour charger les données initiales
  useEffect(() => {
    const load = async () => {
      if (user) {
        await fecthProfile();
      } else {
        setProfile(undefined);
      }
    };
    load();
  }, [user, fecthProfile]);

  useEffect(() => {
    const load = async () => {
      if (user) {
        await fetchStatus();
      } else {
        setStatus(undefined);
      }
    };
    load();
  }, [user, fetchStatus]);

  return {
    profile,
    loading,
    fecthProfile,
    fetchStatus,
    status,
    addProfile,
    editProfile
  };
};
