
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { useState, useEffect, useMemo } from "react";
import { DownloadIcon, UploadCloudIcon, CameraIcon, Sparkles, Image, SaveIcon, RefreshCcw } from "lucide-react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { generateJobKey } from "./utils/jobKey";

export default function SupplementDashboard() {
  const [jobInfo, setJobInfo] = useState({});
  const [supplementItems, setSupplementItems] = useState([]);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [debounceTimer, setDebounceTimer] = useState(null);

  const jobKey = useMemo(() => generateJobKey(userEmail, jobInfo), [userEmail, jobInfo]);

  useEffect(() => {
    if (debounceTimer) clearTimeout(debounceTimer);
    const timer = setTimeout(() => {
      localStorage.setItem("jobInfo", JSON.stringify(jobInfo));
      localStorage.setItem("supplementItems", JSON.stringify(supplementItems));
      localStorage.setItem("uploadedPhotos", JSON.stringify(uploadedPhotos));
      localStorage.setItem("userEmail", userEmail);
    }, 500);
    setDebounceTimer(timer);
    return () => clearTimeout(timer);
  }, [jobInfo, supplementItems, uploadedPhotos, userEmail]);

  const simulatePricingByZip = useMemo(() => {
    const basePrice = 100;
    const multiplier = jobInfo.zip?.startsWith("9") ? 1.2 : 1;
    return basePrice * multiplier;
  }, [jobInfo.zip]);

  const loadSavedJob = () => {
    // Placeholder: dropdown modal should be implemented instead of prompt
    const jobKeyInput = prompt("Enter saved job key:");
    if (!jobKeyInput) return;
    const saved = localStorage.getItem(jobKeyInput);
    if (saved) {
      const { jobInfo, supplementItems, uploadedPhotos } = JSON.parse(saved);
      setJobInfo(jobInfo);
      setSupplementItems(supplementItems);
      setUploadedPhotos(uploadedPhotos);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Supplement AI Dashboard</h1>
      {/* UI components go here */}
      <Button onClick={loadSavedJob}>Load Saved Job</Button>
    </div>
  );
}
