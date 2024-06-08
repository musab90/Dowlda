import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/payment/payment.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";



const PaymentPage = async ({ searchParams }) => {
  // const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;
  // const { count, products } = await fetchProducts(q, page);

  const payments = [
    {
     id: 1,
    TaxeName: "musab",
    PaymentAmount: 1000,
    dueDate: "2021-08-01T00:00:00.000Z",
    PaymentStatues: "paid",
    createdAt: "2021-08-01T00:00:00.000Z",
    
    },
    {
     id: 2,
    TaxeName: "ahmed",
    PaymentAmount: 2000,
    dueDate: "2021-08-01T00:00:00.000Z",
    PaymentStatues: "pending",
    createdAt: "2021-08-01T00:00:00.000Z",
    
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/payments/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>image</td>
            <td>TaxeNmae</td>
            <td>Payment Amount</td>
            <td>due date</td>
            <td>Payment statues</td>
          
          </tr>
        </thead>
        <tbody>
          {
            payments.map((p) => (
              <tr key={p.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={ "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                 
                </div>
              </td>
               
              <td>{p.TaxeName}</td>
              <td>${p.PaymentAmount}</td>
              <td>{p.dueDate}</td>
              <td>{p.createdAt?.toString().slice(4, 16)}</td>
              <td>
              <span className={p.PaymentStatues === "pending" ? `{styles.status} ${styles.pending}` : `{styles.status} ${styles.paid}`}>
                {p.PaymentStatues}
              </span>
            </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/payments`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form >
                    <input type="hidden" name="id"  />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            ))
          }
          {/* {payments.map((product) => (
            <tr key={payments.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                 
                </div>
              </td>
               {payments.TaxeName}
              <td>${payments.PaymentAmount}</td>
              <td>${payments.dueDate}</td>
              <td>{payments.createdAt?.toString().slice(4, 16)}</td>
              <td>
              <span className={`${styles.status} ${styles.pending}`}>
                {payments.PaymentStatues}
              </span>
            </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/payments`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form >
                    <input type="hidden" name="id"  />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <Pagination count={5} />
    </div>
  );
};

export default PaymentPage;
