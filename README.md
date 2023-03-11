# WebOder_DACN
1.1	Mô tả hoạt động hệ thống
Một cửa hàng đồ ăn nhanh cần xây dựng một ứng dụng để khách hàng có thể đặt món ăn và một website để có thể quản lý tổng đã đưa ra một số yêu cầu: ứng dụng phải trực quan, dễ nhìn có đầu đủ các chức năng đăng ký đăng nhập tài khoản, phân chia các mục hợp lý để khách hàng có thể đặt món ăn và theo dõi được trạng thái của đơn hàng… Về website: web phải có đầy đủ các chức năng của một hệ thống quản lý như thêm xoá sửa ngoài ra web là nơi cập nhật trạng thái của đơn hàng để có thể hiển thị bên ứng dụng của khách hàng, bên cạnh đó cần có một số chức năng phụ trợ đi kèm. Bên cạnh đó đội ngũ cũng phát triển thêm một ứng dụng di đọng dành riềng cho shipper, ứng dụng này có chức năng định vị khách hàng, đơn hàng. Ngoài ra ứng dụng này còn hiển thị chi tiết thông tin các đơn hàng và địa chỉ khách hàng để shipper thuận tiện hơn trong quá trinhg giao món trong hệ sinh thái.
-	Ứng dụng và website phải tương tác được với nhau.
-	Ứng dụng chạy trên thiết bị di động.
-	Đầy đủ các chức năng đăng ký đăng nhập. 
-	Ứng dụng của shipper có khả năng địn vị được khách hàng và đơn hàng. 
-	Giao diện được chia theo menu dể khách hàng dễ nắm bắt được chức năng
-	Để bắt đầu quy trình sử dụng khách hàng sẽ trải qua giai đoạn đăng ký để tạo tài khoản để có thể đăng nhập. Sau khi đăng nhập thành công khách hàng có thể bắt bắt đầu chọn chức năng đặt món bằng cách thêm món ăn vào giỏ hàng và đặt món. 
-	Bên phía website sẽ do cửa hàng quản lý để có thể quản lý đơn đặt của khách hàng và quản lý  cập nhật danh sách các món ăn.
 
1.2	Mô tả chức năng chi tiết của ứng dụng 
-	Ứng dụng chạy trên nền tảng thiết bị di động chạy Android 
-	Quy trình sử dụng ứng dụng: 
•	Đăng ký, đăng nhập tài khoản vào ứng dụng
•	Chọn món ăn 
•	Thêm món ăn vào giỏ hàng
•	Đặt món, thanh toán
•	Cập nhật trạng thái đã hoàn thành cho đơn hàng
1.3	Mô tả chức năng chi tiết của website
-	Quản lý món ăn:  nhân viên quản lý website sẽ cập nhật, thay đổi các thông tin của menu món ăn để có thể lưu trữ vào cơ sở dữ liệu từ đó sẽ hiển thị qua ứng dụng của khách hàng
-	Quản lý đơn đặt: sau khi khách hàng đã đặt món ăn nhân viên sẽ theo dõi tình trạng đơn hàng hiện tại để cập nhật các trạng thái (đang xử lý, đã nhận đơn, đang xử lý, đang giao)
1.4	Mô tả chức năng chi tiết ứng dụng định vị
-	Ứng dụng này được phát triển để dành cho các shipper của quán. Tại ứng dụng này sẽ có những chức năng:
•	Shipper sẽ thấy được chi tiết thông tin các đơn hàng và mã đơn hàng để tránh nhầm lẫn trong quá trình vận chuyển.
•	Bên cạnh đó tại đây shipper sẽ có thể thấy được vị trí của khách hàng đặt đơn từ bản đồ. Từ đó sẽ thuận tiện trong quá trình xác định vị trí khách hàng.
-	Khi đơn hàng được  bàn giao cho shipper  thì trạng thái đơn hàng sẽ được chuyển đổi thành đang được giao.
1.5	Tổng hợp các yêu cầu
Sau quá trình khảo sát cho yêu cầu của ứng dụng và yêu cầu của website
-	Yêu cầu của ứng dụng: 
+  	Giao diện đơn giản, dễ nhìn, dễ thao tác.
+ 	Yêu cầu phần mềm linh hoạt trong việc đặt món ăn.
+	Đơn giản hoá quy trình đặt món và thanh toán.
-	Yêu cầu của website:
+ 	Website ổn định, thao tác nhanh
+	Có khả năng tương tác được với ứng dụng để có thể cập nhật trạng thái đơn hàng cho khách hàng theo dõi. 
-	Yêu cầu của ứng dụng dành cho shipper:
+ 	Ứng dụng hiển thị đầy đủ thông tin của đơn hàng. 
+	Có khả năng định vị đơn hàng  và khách hàng. 

Tổng kết:
	 Sau quá trình khảo sát, nhóm đã thống nhất và xem xét các phương án thiết kế và xây dựng phần mềm, website chốt lại được các yêu cầu  sau:
1.	Giao diện thân thiện, dễ sử dụng
2.	Chủ đề ứng dụng dễ dàng thay đổi tùy biến
3.	Đảm bảo an toàn bảo mật
4.	Quản lý đơn đặt
5.	Quản lý danh sách món 
6.	Dễ dàng cài đặt và sử dụng
7.	Tương thích tốt với nhiều hệ thống, chi phí đầu tư thấp
1.6	Công cụ dùng để phát triển ứng dụng
Công cụ phân tích: UML, Case studio 2
Thiết kế CSDL: MongoDB
Công cụ lập trình: Visual Code
Kỹ thuật: React Native, NodeJS…
---------------------HUỚNG DẪN SỬ DỤNG-----------------------
3.3	Xây dựng website quản lý
	3.3.1	Trang thanh toán 
- Trang quản lý sẽ đăng ký và đăng nhập để truy cập vào trang quản lý


	3.3.2	Chức năng bán tại quầy 
- Chức năng đầu tiên sau khi đăng nhập là chức năng bán tại quầy, tại đây nhân viên có thể thêm, xoá, sửa món ăn để có thể phục vụ khách hàng tại chỗ

	3.3.2	Chức năng thêm voucher
- Nhân viên sẽ có chức năng thêm voucher để cập nhật qua app đặt món của người dùng

	3.3.2	Trang quản lý sản phẩm 
- Tại đây nhân viên có thể quản lý được chi tiết các sản phẩm đang có, có thể thêm, xoá, sửa, khô phục món ăn.




	3.3.3	Giao diện quản lý đơn đặt 
- Giao diện này cho phép nhân viên quản lý được các đơn đặt của khách hàng. Quản lý đơn đặt là công việc quản lý thông tin đơn hàng khi có khách hàng sử dụng ứng dụng đặt hàng, ngoài ra còn chuyển trạng thái đơn hàng của khách.


	3.3.4	Trang quản lý lịch sử đơn đặt 
- Tại đây sẽ lưu lại các thông tin của những đơn hàng đã đặt và trạng thái của những đơn đấy
.

	3.3.5	Giao diện quản lý thông tin khách hàng 
- Trang có chức năng chính để có thể xem được thông tin tài khoản khách hàng và chặn những tài khoản vi phạm những chính sách của app.

