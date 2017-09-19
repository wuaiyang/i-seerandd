<!--#include file="conn.asp"-->
<%
if request("action")="add" then
  set rs = Server.CreateObject("adodb.recordset")
  sql = "select * from [web_guestbook]"
  rs.open sql,conn,1,3
  rs.addnew
    rs("g_Name")=Trim(Request.Form("name"))
    rs("g_email")=trim(Request.Form("email"))
    rs("g_tel")=trim(request.Form("myTel"))
    rs("g_addr")=trim(Request.Form("myAddress"))
    rs("g_city")=trim(Request.Form("myCity"))
    rs("g_country")=trim(Request.Form("myCountry"))
    rs("g_msg")=request.Form("content")
    rs("g_ip")=request.ServerVariables("REMOTE_ADDR")
  rs.update
  rs.close
end if
%>