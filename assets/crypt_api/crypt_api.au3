#cs ----------------------------------------------------------------------------
 AutoIt Version: 3.3.15.0 (Beta)
 Author:         DDA209
 Script Function:
	Chiffreur d'API
#ce ----------------------------------------------------------------------------
#include <Array.au3>
#include <GuiConstantsEx.au3>
#include <ButtonConstants.au3>

; Dimensions de la fenêtre
Const $winWdt = 660
Const $winHei = 150
Const $winBrd = 10

; Définition des bouton
Const $btnBdrTop = 10
Const $btnWdt = 90
Const $btnHei = 25
Const $btn1BrdLft = $winWdt - $btnWdt - $winBrd
Const $btnIntSpc = 3
Const $btnNbr = 4

; Zone d'information
Const $msgLen = 268
Const $msgHei = 13


; Définition des inputs
Const $inpBrdLft = $winBrd + 125
Const $inpBrdTop = 10
Const $inpHei = 20
Const $lblBrdTop = $inpBrdTop + 3
Const $dspBrdTop = $btnNbr * $btnHei + ($btnNbr - 1) * $btnIntSpc + 2 * $winBrd
Const $inpLblIntSpc = 3
Const $inpChkLfToCrypt = $winBrd + 125
Const $inpChkLfKey = $winBrd + 115
Const $inpChkLfResult = $winBrd + 60
Const $inpCryptWdt = $winWdt - (2 * $winBrd) - $inpChkLfToCrypt - $btnWdt
Const $inpResultWdt = $winWdt - (2 * $winBrd) - $inpChkLfResult - $btnWdt
Const $inpKeyWdt = $winWdt - (2 * $winBrd) - $inpChkLfKey - $btnWdt

; Création de la fenêtre
GUICreate("Chiffreur de clé", $winWdt, $winHei)

Local $charLen
Local $charsConcat = []
Local $authorizedChars = ""

; Mise en place des boutons
Const $generate = GUICtrlCreateButton("Chiffrer", $btn1BrdLft, $btnBdrTop, $btnWdt, $btnHei)
Const $export = GUICtrlCreateButton("Export du résultat", $btn1BrdLft, $btnBdrTop + 1 * ($btnIntSpc + $btnHei), $btnWdt, $btnHei)
Const $quit = GUICtrlCreateButton ( "Fermer", $btn1BrdLft, $btnBdrTop + 2 * ($btnIntSpc + $btnHei), $btnWdt,$btnHei )

; Input à chiffrer
GUICtrlCreateLabel("Entrer la valeur à chiffrer : ", $winBrd, $lblBrdTop) ; chiffreur de clé
Local $toCrypt = (GUICtrlCreateInput("", $inpChkLfToCrypt, $inpBrdTop, $inpCryptWdt, $inpHei)) ; chiffreur de clé

AuthorizedChars()
GUICtrlCreateLabel("Caractères autorisées : ", $winBrd, $lblBrdTop + ( $inpHei + $inpLblIntSpc ) )
GUICtrlCreateLabel($authorizedChars, $winBrd, $lblBrdTop - 5 + ( $inpHei + $inpLblIntSpc ) * 2 )

; Input chiffrement
GUICtrlCreateLabel("Clé pour le chiffrement : ", $winBrd, $lblBrdTop + ( $inpHei + $inpLblIntSpc ) * 3 ) ; chiffreur de clé
Local $key = (GUICtrlCreateInput("", $inpChkLfKey, $inpBrdTop + ( $inpHei + $inpLblIntSpc ) * 3 , $inpKeyWdt, $inpHei)) ; chiffreur de clé

; Output résultat
GUICtrlCreateLabel("Clé chiffrée : ", $winBrd, $lblBrdTop + ( $inpHei + $inpLblIntSpc ) * 4 ) ; chiffreur de clé
Local $display = (GUICtrlCreateInput ("", $inpChkLfResult, $inpBrdTop + ( $inpHei + $inpLblIntSpc ) * 4 , $inpResultWdt, $inpHei)) ; chiffreur de clé

Local $extrac = ""

App() ; démarrage de l'application






Func App()

	GUISetState() ; génération de la fenêtre
	While 1
		Switch GUIGetMsg()

			Case $generate
				If GUICtrlRead($toCrypt) <> "" Then
					Crypt(GUICtrlRead($toCrypt))  ; Génération d'un mot de passe
				Else
					MsgBox(0, "Erreur de saisie", "Veuillez saisir une clé de décodage", 0, 0x10)
				EndIf


				;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; GUICtrlSetData($display, "") ; vider le résultat
				;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; $finalPW = ""
				;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; $listPW = ""
				;;;;;;;ClipPut($finalPW) ; Enregistre dans le presse papier

			Case $export
				Export() ; Récupération de la valeur chiffrée

			Case $GUI_EVENT_CLOSE
				ExitLoop ; Permet de quitter l'application

			Case $quit
				ExitLoop

		EndSwitch

	WEnd

EndFunc   ;==>App

Func Crypt($toCalc)

	Local $arrToCalc = StringSplit($toCalc, "") ; Input des caractères à chiffrer splité dans un array de caractère
	Local $arrNums = [] ; transformation en codes ASCII de chaque caractère
	Local $arrTransform = [] ; mise en place d'un calcul pour changer le code ASCII du caractère
	Local $arrResult = [] ; remise en caratère à partir du nouveau code ASCII
	Local $result = "" ; chaîne de caractères chiffrée

	Local $arrKey = StringSplit($key, "")
	Local $keyLevel1 = 0
	Local $keyLevel2 = 0
	Local $keyLevel3 = 0
	Local $keyLevel4 = 0

	For $i = 1 To $arrKey[0] step 4
		$keyLevel1 = Int(Asc($arrKey[$i+0])) + $keyLevel1
		If $i+1 <= $arrKey[0] Then
			$keyLevel2 = Int(Asc($arrKey[$i+1])) + $keyLevel2
		EndIf
		If $i+2 <= $arrKey[0] Then
			$keyLevel3 = Int(Asc($arrKey[$i+2])) + $keyLevel3
		EndIf
		If $i+3 <= $arrKey[0] Then
			$keyLevel4 = Int(Asc($arrKey[$i+3])) + $keyLevel4
		EndIf


	Next

		MsgBox(0,"Niveaux de clés", "Niveau 1 : " & $keyLevel1 & @CRLF & "Niveau 2 : " & $keyLevel2 & @CRLF & "Niveau 3 : " & $keyLevel3 & @CRLF & "Niveau 4 : " & $keyLevel4 & @CRLF & @CRLF & Int(Asc($arrKey[2]))+1000 )


	For $i = 0 To $arrToCalc[0] step 1
		$arrTransform[$i] = Asc($arrToCalc[$i])
	Next



   MsgBox(0,"Chiffrage", "En travaux... " & $arrToCalc[0])




EndFunc   ;==>Crypt

Func Export()
   Local $toExport = GUICtrlRead($display)
   Local $listFile = "Crypted.txt"
   $extract = "Chiffrage effectué le " & @MDAY & "/" & @MON & "/" & @YEAR & " à " & @HOUR & ":" & @MIN & ":" & @SEC & "," & @MSEC & " :" & @CRLF & @CRLF & $toExport & @CRLF & @CRLF
   FileWrite($listFile, $extract)
   MsgBox(0x40,"Chiffrage exporté", "Le chiffrage a été le fichier : " & $listFile)

EndFunc   ;==>Export

Func AuthorizedChars ()

   $authorizedChars = ""

   For $i = 33 to 126 Step 1
	  $newChar = Chr($i)
	  $authorizedChars = $authorizedChars & $newChar
   Next

EndFunc ;==> AuthorizedChars


