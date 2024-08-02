from selenium import webdriver

# Khởi tạo WebDriver cho Chrome
driver = webdriver.Chrome()

# Mở một trang web
driver.get('https://www.google.com')

# Đóng trình duyệt
driver.quit()
