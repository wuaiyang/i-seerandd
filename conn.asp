<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%Session.CodePage=65001%>
<%
'on error resume next
Response.CharSet = "utf-8" 
set conn=server.createobject("adodb.connection")
DBPath = Server.MapPath("#data.mdb")
conn.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source="&DBPath 


sub disconn()
	conn.close
	set conn=nothing	
end sub

CALL sqlErr

sub sqlErr
	Dim Fy_Url,Fy_a,Fy_x,Fy_Cs(),Fy_Cl,Fy_Ts,Fy_Zx
	'---定义部份  头------
	Fy_Cl = 1		'处理方式：1=提示信息,2=转向页面,3=先提示再转向
	Fy_Zx = "Error.Asp"	'出错时转向的页面
	'---定义部份  尾------
	
	'通用防注入 V1.0 ASP版
	On Error Resume Next
	Fy_Url=Request.ServerVariables("QUERY_STRING")
	Fy_a=split(Fy_Url,"&")
	redim Fy_Cs(ubound(Fy_a))
	On Error Resume Next
	for Fy_x=0 to ubound(Fy_a)
		Fy_Cs(Fy_x) = left(Fy_a(Fy_x),instr(Fy_a(Fy_x),"=")-1)
	Next
	For Fy_x=0 to ubound(Fy_Cs)
		If Fy_Cs(Fy_x)<>"" Then
			If Instr(LCase(Request(Fy_Cs(Fy_x))),"'")>0 or Instr(LCase(Request(Fy_Cs(Fy_x))),"and ")>0 or Instr(LCase(Request(Fy_Cs(Fy_x))),"select ")>0 or Instr(LCase(Request(Fy_Cs(Fy_x))),"update ")>0 or Instr(LCase(Request(Fy_Cs(Fy_x))),"chr(")>0 or Instr(LCase(Request(Fy_Cs(Fy_x))),"delete from")>0 or Instr(LCase(Request(Fy_Cs(Fy_x))),";")>0 or Instr(LCase(Request(Fy_Cs(Fy_x))),"insert ")>0 or Instr(LCase(Request(Fy_Cs(Fy_x))),"mid(")>0 Or Instr(LCase(Request(Fy_Cs(Fy_x))),"master.")>0 Then
				Select Case Fy_Cl
				  Case "1"
					Response.Write "<Script Language=JavaScript>alert('出现错误！参数 "&Fy_Cs(Fy_x)&" 的值中包含非法字符串！');window.close();</Script>"
				  Case "2"
					Response.Write "<Script Language=JavaScript>location.href='"&Fy_Zx&"'</Script>"
				  Case "3"
					Response.Write "<Script Language=JavaScript>alert('出现错误！参数 "&Fy_Cs(Fy_x)&"的值中包含非法字符串！');location.href='"&Fy_Zx&"';</Script>"
				End Select
				Response.End
			End If
		End If
	Next
end sub

'========================================HTML转换成文本
function HTMLEncode2(fString)
if fString<>"" and not isnull(fstring) then
	fString = replace(fString, "&gt;", ">")
	fString = replace(fString, "&lt;", "<")
    fString = replace(fString, "&quot;", """")
	fString = Replace(fString, "&nbsp;", chr(32))
	fString = Replace(fString, "</P><P>", CHR(10) & CHR(10))
	fString = Replace(fString, "<BR>", CHR(10))
	htmlencode2=fString
end if
end function

'========================================文本转换成HTML
function HTMLEncode(fString)
if fString<>"" and not isnull(fString) then
    fString = replace(fString, ">", "&gt;")
    fString = replace(fString, "<", "&lt;")
    fString = replace(fString, """", "&quot;")
    fString = Replace(fString, CHR(32), "&nbsp;")
    fString = Replace(fString, CHR(9), "&nbsp;")
    fString = Replace(fString, CHR(34), "&quot;")
    fString = Replace(fString, CHR(39), "&#39;")
    fString = Replace(fString, CHR(13), "")
    fString = Replace(fString, CHR(10) & CHR(10), "</P><P>")
    fString = Replace(fString, CHR(10), "<BR>")
'    fString=ChkBadWords(fString)
    HTMLEncode = fString
end if
end function

Function RemoveHTML(strHTML) 
Dim objRegExp, Match, Matches 
Set objRegExp = New Regexp 
objRegExp.IgnoreCase = True 
objRegExp.Global = True 
'取闭合的<> 
objRegExp.Pattern = "<.+?>" 
'进行匹配 
Set Matches = objRegExp.Execute(strHTML) 
' 遍历匹配集合，并替换掉匹配的项目 
For Each Match in Matches 
strHtml=Replace(strHTML,Match.Value,"") 
Next 
RemoveHTML=strHTML 
Set objRegExp = Nothing 
End Function 
%>