import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value=""/>
          <label>Title</label>
          <input type="text" name="title" placeholder="iphone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="33" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="21" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="adsfasdfasd" />
          <label>Cat</label>
          <select name="isAdmin" id="isAdmin">
            <option value="categ1" selected="selected">Categ1</option>
            <option value="categ2">categ2</option>
          </select>
          <label>Description</label>
          <textarea name="descr" rows="10" placeholder="Description"/>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;