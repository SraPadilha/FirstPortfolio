from tkinter import *

window = Tk()
window.geometry("600x600")
window.title("Faturamentos em Python")

usernameVar = StringVar()
passwordVar = StringVar()

def set_background():
    image = PhotoImage(file=r"C:\Users\primetek\Desktop\Portfolio\imgpjt\faturamento.png")
    window.image = image  # Mantém a imagem em memória
    background_label = Label(window, image=image)
    background_label.place(x=0, y=0, relwidth=1, relheight=1)

def adminLogin():
    titleLabel = Label(window, text="Faturamentos")
    titleLabel.grid(row=0, column=0, columnspan=2, padx=(40,0), pady=(10,0))

    loginLabel = Label(window, text="Administrador Login:")
    loginLabel.grid(row=1, column=2, padx=20, pady=10)

    usernameLabel = Label(window, text="Usuário:")
    usernameLabel.grid(row=2, column=2)

    passwordLabel = Label(window, text="Senha")
    passwordLabel.grid(row=3, column=2)

    usernameEntry = Entry(window, textvariable=usernameVar)
    usernameEntry.grid(row=2, column=3)

    passwordEntry = Entry(window, textvariable=passwordVar)
    passwordEntry.grid(row=3, column=3)

set_background()
adminLogin()

# Define o redimensionamento da imagem de fundo ao redimensionar a janela
window.columnconfigure(0, weight=1)
window.rowconfigure(0, weight=1)

window.mainloop()
