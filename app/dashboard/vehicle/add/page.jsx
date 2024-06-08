import { addVehicle } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/payment/addPayment/addPayment.module.css";

const AddVehiclePage = () => {
  return (
    // <td>Name</td>
    // <td>Model</td>
    // <td>Plate</td>
    // <td>Owner</td>
    // <td>image</td>
    <div className={styles.container}>
      <form action={addVehicle} className={styles.form}>
        
          <input type="text" placeholder="name" name="Vname" required />
       
        
        
        <select name="VType" id="type">
          <option value="chose">Vehicle Type</option>
          <option value="one10">one10</option>
          <option value="bajaj">bajaj</option>
          <option value="harrier ">harrier</option>
          <option value="brobox">brobox</option>
        </select>
        <input type="text" placeholder="model" name="Vmodel" required />
        <input type="text" placeholder="plate" name="Vtr" required />
        <input type="text" placeholder="owner" name="phone" />
        <input type="file" placeholder="owner" name="Vownerimg" />
        <input type="file" placeholder="owner" name="Vimg" />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddVehiclePage;
