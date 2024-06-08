import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/payment/payment.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchVehicles } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

const VehiclePage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, vehicles } = await fetchVehicles(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/vehicle/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Model</td>
            <td>Plate</td>
            <td>Owner</td>
            <td>Vehicle Type</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v._id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={v.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {v.Vname}
                </div>
              </td>
              <td>{v.Vmodel}</td>
              <td>{v.Vtr}</td>
              <td>{v.Vowner}</td>
              <td>{v.VType[0]}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/vehicle/${v.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={v.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default VehiclePage;
