import { updateProduct } from "@/app/lib/actions";
import { fetchVehicle } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/payment/singlePayment/singlePayment.module.css";
import Image from "next/image";

const SingleVehiclePage = async ({ params }) => {
  const { id } = params;
  const vehicle = await fetchVehicle(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {vehicle.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={vehicle.id} />
          <label>VName</label>
          <input type="text" name="Vname" placeholder={vehicle.Vname} />
          <label>Vowner</label>
          <input type="text" name="Vowner" placeholder={vehicle.Vowner} />
          <label>Vtr</label>
          <input type="number" name="Vtr" placeholder={vehicle.Vtr} />
          <label>VType</label>
          <select name="VType" id="VType">
           
                    <option value="bajaj">bajaj</option>
                    <option value="gari">car</option>
               
           
          </select>
          
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleVehiclePage;
