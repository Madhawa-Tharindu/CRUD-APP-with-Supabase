import supabase from "../config/supabaseClinet"
import { useEffect, useState } from "react";
import SmoothieCard from "../components/SmoothieCard";

const Home = () => {

  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
      .from('smoothies')
      .select()

      if (error) {
        setFetchError("Could not fetch the smoothies", error);
        setSmoothies(null);
        console.log(error);
      }
      if (data) {
        setSmoothies(data);
        console.log(data);
        setFetchError(null);
      }
    }

    fetchSmoothies();
  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className="smoothies">
          {/* order by buttons */}
            <div className="smoothie-grid"> 
              {smoothies.map(smoothies => (
                <SmoothieCard key={smoothies.id} smoothie={smoothies} />
              ))}        
            </div>
        </div>
      )}
    </div>
  )
}

export default Home