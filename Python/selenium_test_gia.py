from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time

# Đường dẫn đến ChromeDriver của bạn
chrome_driver_path = '/Users/sonnh33/Downloads/chromedriver'  # Cập nhật đúng đường dẫn

# Khởi tạo Service và WebDriver
service = Service(executable_path=chrome_driver_path)
options = Options()
driver = webdriver.Chrome(service=service, options=options)

# Mở trang Shopee
driver.get("https://shopee.vn")

# Chờ trang tải
time.sleep(5)

# Tìm kiếm sản phẩm
search_box = driver.find_element(By.CLASS_NAME, "shopee-searchbar-input__input")
search_box.send_keys("laptop")
search_box.submit()

# Chờ kết quả tìm kiếm tải xong
time.sleep(5)

# Thu thập dữ liệu sản phẩm
products = driver.find_elements(By.CLASS_NAME, "shopee-search-item-result__item")

for product in products:
    try:
        title = product.find_element(By.CLASS_NAME, "yQmmFK").text
        price = product.find_element(By.CLASS_NAME, "ZEgDH9").text
        print(f"Title: {title}, Price: {price}")
    except Exception as e:
        print(f"Error: {e}")

# Đóng trình duyệt
driver.quit()
