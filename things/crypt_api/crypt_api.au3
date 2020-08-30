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
Const $winWdt = 600
Const $winHei = 100
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
Const $inpChkLfPin = $winBrd + 115
Const $inpChkLfResult = $winBrd + 86
Const $inpCryptWdt = $winWdt - (2 * $winBrd) - $inpChkLfToCrypt - $btnWdt
Const $inpResultWdt = $winWdt - (2 * $winBrd) - $inpChkLfResult - $btnWdt
Const $inpPinWdt = 120

; Création de la fenêtre
GUICreate("Chiffreur de clé", $winWdt, $winHei)

Local $charLen
Local $charsConcat = []

; Mise en place des boutons
Const $generate = GUICtrlCreateButton("Chiffrer", $btn1BrdLft, $btnBdrTop, $btnWdt, $btnHei)
Const $export = GUICtrlCreateButton("Export du résultat", $btn1BrdLft, $btnBdrTop + 1 * ($btnIntSpc + $btnHei), $btnWdt, $btnHei)
Const $quit = GUICtrlCreateButton ( "Fermer", $btn1BrdLft, $btnBdrTop + 2 * ($btnIntSpc + $btnHei), $btnWdt,$btnHei )

; Input clé
GUICtrlCreateLabel("Entrer la valeur à chiffrer : ", $winBrd, $lblBrdTop) ; chiffreur de clé
Local $toCrypt = (GUICtrlCreateInput("Elémént à chiffrer", $inpChkLfToCrypt, $inpBrdTop, $inpCryptWdt, $inpHei)) ; chiffreur de clé

; Input chiffrement
GUICtrlCreateLabel("Clé pour le chiffrement : ", $winBrd, $lblBrdTop + $inpHei + $inpLblIntSpc ) ; chiffreur de clé
Local $pin = (GUICtrlCreateInput("clé pour chiffrage", $inpChkLfPin, $inpBrdTop + $inpHei + $inpLblIntSpc, $inpPinWdt, $inpHei)) ; chiffreur de clé

; Output résultat
GUICtrlCreateLabel("Clé à enregistrer : ", $winBrd, $lblBrdTop + ( $inpHei + $inpLblIntSpc ) * 2 ) ; chiffreur de clé
Local $display = (GUICtrlCreateInput ("", $inpChkLfResult, $inpBrdTop + ( $inpHei + $inpLblIntSpc ) * 2 , $inpResultWdt, $inpHei)) ; chiffreur de clé

Local $extrac = ""

App() ; démarrage de l'application

Func App()

	GUISetState() ; génération de la fenêtre
	While 1
		Switch GUIGetMsg()

			Case $generate
				If GUICtrlRead($toCrypt) <> "" Then
					Crypt()  ; Génération d'un mot de passe
				Else
					MsgBox(0, "Erreur de saisie", "Veuillez entrer une valeur entre 1 et 1000", 0, 0x10)
				EndIf


				;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; GUICtrlSetData($display, "") ; vider le résultat
				;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; $finalPW = ""
				;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; $listPW = ""
				;;;;;;;ClipPut($finalPW) ; Enregistre dans le presse papier

			Case $export
				Export() ; Récupération de la liste de mots de passes

			Case $GUI_EVENT_CLOSE
				ExitLoop ; Permet de quitter l'application

			Case $quit
				ExitLoop

		EndSwitch

	WEnd

EndFunc   ;==>App

Func Crypt()

   MsgBox(0,"Chiffrage", "En travaux...")

EndFunc   ;==>Crypt

Func Export()
   Local $toExport = GUICtrlRead($display)
   Local $listFile = "Crypted.txt"
   $extract = "Chiffrage effectué le " & @MDAY & "/" & @MON & "/" & @YEAR & " à " & @HOUR & ":" & @MIN & ":" & @SEC & "," & @MSEC & " :" & @CRLF & @CRLF & $toExport & @CRLF & @CRLF
   FileWrite($listFile, $extract)
   MsgBox(0x40,"Chiffrage exporté", "Le chiffrage a été le fichier : " & $listFile)

EndFunc   ;==>Export