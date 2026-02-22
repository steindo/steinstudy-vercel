import fitz
import os

pdf_path = r"C:\Users\user\Desktop\malik\book\official_IELTS-1WWW.IELTSPOP.COM_.pdf"
output_dir = r"C:\Users\user\Desktop\malik\taskbook\temp_verify"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# Extract page 1 and 7 (fitz uses 0-based indexing)
for p_num in [0, 6]:
    page = doc[p_num]
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
    output_path = os.path.join(output_dir, f"pdf_page_{p_num + 1}.jpg")
    pix.save(output_path)
    print(f"Saved {output_path}")

doc.close()
