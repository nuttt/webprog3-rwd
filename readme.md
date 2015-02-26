# Web Programming - Responsive Web Design

54310101 ณัฐพล พัฒนาวิจิตร 

Demo: http://www.nuttt.me/cpeng

Source: https://github.com/nuttt/webprog3-rwd

## Responsive Behavior - Breakpoint

ได้แบ่งความกว้างของหน้าจอเป็นสามช่วง ได้แก่
1. **น้อยกว่า 7678px** สำหรับ Mobile Devices
2. **768px - 991px** สำหรับ Portrait Tablet
3. **มากกว่า 991px** สำหรับ Landscape Tablet, Desktop

โดยใช้ Media Query ที่ใช้ในการแบ่งคือ

	@media (max-width: 991px) {
	
และ

	@media (max-width: 767px) {

โดยในการพัฒนานั้นทำในลักษณะ Desktop First คือทำเวอร์ชันสำหรับหน้าจอขนาดใหญ่ก่อน แล้วใช้ Media Query ในการปรับให้เหมาะสมกับขนาดของจอที่เล็กลง 

![enter image description here](http://www.nuttt.me/cpeng/land.png)

จาก Desktop ไปยังขนาดหน้าจออื่นๆ มีการปรับดังนี้

### Portrait Tablet : 768px - 991px

![enter image description here](http://www.nuttt.me/cpeng/port.png)

- ปรับ Height, Margin, Padding, Line Height, และ Absolute Position สำหรับการจัดเรียงตัวอักษรในส่วนของรูปใหญ่สุดเพื่อให้รูปและตัวอักษรมีขนาดเล็กลง
- ซ่อนเมนูลัดใน sidebar และปรับความกว้างในส่วนเนื้อหาเป็น 100%

### Mobile Devices : < 768px

- ปรับขนาด font โดยรวมทั้งหน้าลดลง เพื่อให้ไม่ใหญ่เกินไปใน Mobile ซึ่งจะทำให้หน้าเว็บยาวเกินโดยไม่จำเป็น
- นำช่อง Search ออก และปรับโลโก้มาอยู่ตรงกลาง
- ปรับส่วน Navigation เป็นแนวตั้ง เพื่อให้กดได้ง่ายขึ้น
- ลด Margin ด้านข้างของทั้งหมด เพื่อให้ใช้พื้นที่ในจอได้คุ้มค่ามากขึ้น และไม่ทำให้เว็บยาวเกินไป
- ตัดรูป Thumbnail ในส่วนของข่าวออก

## Responsive Behavior อื่นๆ

![enter image description here](http://www.nuttt.me/cpeng/iosall.jpg)

- ใช้การกำหนดความกว้าง, ความสูง, และตำแหน่งต่างๆ แบบ dynamic เพื่อให้รองรับจอได้ทุกขนาด ได้แก่
	- กำหนดความกว้างเป็น %
	- กำหนดความกว้างโดยใช้ `calc()` เพื่อคำนวนความกว้างที่ถูกต้อง
	- กำหนด Absolute Position เป็น % และใช้ `translate` เพื่อช่วยจัดให้อยู่ตรงกลาง
- ใช้ `display: table` และ `display: table-cell` ในการทำ sidebar ที่มีขนาดคงที่ และ content ที่มีขนาดเท่ากับส่วนที่เหลือ
- ใช้ `background: cover` เพื่อให้รูปแบกกราวด์เต็มกรอบตลอดเวลาไม่ว่ารูปและหน้าจอมีขนาดเท่าไหร่ก็ตาม