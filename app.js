
document.addEventListener("DOMContentLoaded", function () {

    // Liste des plats
    const plats = [
        { nom: "Tajine de Poulet", categorie: "Marocain", prix: 75, image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80", description: "Tajine de poulet aux épices, citron confit et olives." },
        { nom: "Tajine de Viande", categorie: "Marocain", prix: 95, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80", description: "Viande mijotée et préparée aux épices." },
        { nom: "Couscous Marocain", categorie: "Marocain", prix: 85, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80", description: "Couscous accompagné de légumes frais." },
        { nom: "Rfissa", categorie: "Marocain", prix: 80, image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80", description: "Spécialité marocaine au poulet et aux lentilles." },
        { nom: "Pastilla au Poulet", categorie: "Marocain", prix: 70, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80", description: "Pastilla croustillante aux saveurs sucrées-salées." },
        { nom: "Soupe du Jour", categorie: "Entrée", prix: 25, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80", description: "Soupe chaude préparée avec des ingrédients frais." },
        { nom: "Nuggets de Poulet", categorie: "Entrée", prix: 35, image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80", description: "Poulet croustillant servi bien chaud." },
        { nom: "Pizza Margherita", categorie: "Pizza", prix: 55, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80", description: "Tomate, mozzarella et basilic." },
        { nom: "Pizza Quatre Fromages", categorie: "Pizza", prix: 70, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80", description: "Pizza généreuse aux quatre fromages." },
        { nom: "Pizza au Poulet", categorie: "Pizza", prix: 75, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80", description: "Poulet, fromage et légumes." },
        { nom: "Pizza Végétarienne", categorie: "Pizza", prix: 60, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80", description: "Pizza aux légumes frais et au fromage." },
        { nom: "Burger Gourmet", categorie: "Burger", prix: 65, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=700&q=80", description: "Burger maison avec steak, fromage et sauce spéciale." },
        { nom: "Cheeseburger", categorie: "Burger", prix: 55, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80", description: "Steak haché, cheddar et salade." },
        { nom: "Burger au Poulet", categorie: "Burger", prix: 50, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=80", description: "Poulet croustillant et sauce crémeuse." },
        { nom: "Spaghetti Bolognaise", categorie: "Pâtes", prix: 60, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80", description: "Spaghetti à la sauce tomate et à la viande." },
        { nom: "Penne au Poulet", categorie: "Pâtes", prix: 65, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80", description: "Penne crémeuses au poulet et aux herbes." },
        { nom: "Lasagnes", categorie: "Pâtes", prix: 70, image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=80", description: "Lasagnes gratinées au fromage et à la tomate." },
        { nom: "Salade Marocaine", categorie: "Salade", prix: 30, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80", description: "Salade fraîche aux légumes de saison." },
        { nom: "Salade César", categorie: "Salade", prix: 45, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=700&q=80", description: "Salade, poulet grillé et sauce César." },
        { nom: "Tiramisu", categorie: "Dessert", prix: 35, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80", description: "Dessert crémeux au café et au cacao." },
        { nom: "Cheesecake", categorie: "Dessert", prix: 35, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80", description: "Cheesecake onctueux et gourmand." },
        { nom: "Fondant au Chocolat", categorie: "Dessert", prix: 40, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80", description: "Gâteau au chocolat au cœur fondant." },
        { nom: "Crêpes au Chocolat", categorie: "Dessert", prix: 30, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=700&q=80", description: "Crêpes fines garnies de chocolat." },
        { nom: "Jus d'Orange Frais", categorie: "Boisson", prix: 20, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=700&q=80", description: "Jus d'orange fraîchement pressé." },
        { nom: "Milkshake au Chocolat", categorie: "Boisson", prix: 30, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80", description: "Milkshake onctueux au chocolat." },
        { nom: "Café Latte", categorie: "Boisson", prix: 22, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80", description: "Café espresso avec du lait." },
        { nom: "Thé à la Menthe", categorie: "Boisson", prix: 15, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80", description: "Thé traditionnel à la menthe." }
    ];

    const menuContainer = document.getElementById("menu-container");
    const searchInput = document.getElementById("search-input");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const sortPrix = document.getElementById("sort-prix");

    let categorieActive = "Tous";

    // Normaliser le texte pour faciliter la recherche
    function normaliserTexte(texte) {
        return texte
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    // Afficher les plats
    function afficherPlats(liste) {
        menuContainer.innerHTML = "";

        if (liste.length === 0) {
            menuContainer.innerHTML =
                '<p class="aucun-resultat">Aucun plat trouvé.</p>';
            return;
        }

        liste.forEach(function (plat) {
            const carte = document.createElement("article");
            carte.className = "menu-card";

            const image = document.createElement("img");
            image.className = "menu-card-image";
            image.src = plat.image;
            image.alt = plat.nom;
            image.loading = "lazy";

            image.onerror = function () {
                image.onerror = null;
                image.src = "https://placehold.co/600x400?text=Le+Gourmet";
            };

            const contenu = document.createElement("div");
            contenu.className = "menu-card-content";

            const categorie = document.createElement("span");
            categorie.className = "menu-card-category";
            categorie.textContent = plat.categorie;

            const titre = document.createElement("h3");
            titre.textContent = plat.nom;

            const description = document.createElement("p");
            description.textContent = plat.description;

            const bas = document.createElement("div");
            bas.className = "menu-card-bottom";

            const prix = document.createElement("span");
            prix.className = "menu-card-price";
            prix.textContent = plat.prix + " DH";

            const bouton = document.createElement("button");
            bouton.className = "btn-commander";
            bouton.type = "button";
            bouton.textContent = "Commander";

            bouton.addEventListener("click", function () {
                commanderPlat(plat.nom);
            });

            bas.appendChild(prix);
            bas.appendChild(bouton);

            contenu.appendChild(categorie);
            contenu.appendChild(titre);
            contenu.appendChild(description);
            contenu.appendChild(bas);

            carte.appendChild(image);
            carte.appendChild(contenu);

            menuContainer.appendChild(carte);
        });
    }

    // Rechercher, filtrer et trier les plats
    function filtrerPlats() {
        const recherche = normaliserTexte(searchInput.value.trim());

        let resultats = plats.filter(function (plat) {
            const bonneCategorie =
                categorieActive === "Tous" ||
                plat.categorie === categorieActive;

            const texte = normaliserTexte(
                plat.nom + " " +
                plat.description + " " +
                plat.categorie
            );

            const correspondRecherche = texte.includes(recherche);

            return bonneCategorie && correspondRecherche;
        });

        // Trier les résultats selon le prix
        if (sortPrix && sortPrix.value === "asc") {
            resultats.sort(function (a, b) {
                return a.prix - b.prix;
            });
        } else if (sortPrix && sortPrix.value === "desc") {
            resultats.sort(function (a, b) {
                return b.prix - a.prix;
            });
        }

        afficherPlats(resultats);
    }

    // Gérer les catégories
    categoryButtons.forEach(function (bouton) {
        bouton.addEventListener("click", function () {
            categoryButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            bouton.classList.add("active");
            categorieActive = bouton.textContent.trim();

            filtrerPlats();
        });
    });

    // Recherche en temps réel
    if (searchInput) {
        searchInput.addEventListener("input", filtrerPlats);
    }

    // Tri par prix
    if (sortPrix) {
        sortPrix.addEventListener("change", filtrerPlats);
    }

    // Commande WhatsApp
    function commanderPlat(nomPlat) {
        const numeroWhatsApp = "212600000000";

        if (numeroWhatsApp === "212600000000") {
            alert(
                "Pour activer les commandes, remplacez le numéro WhatsApp de démonstration dans app.js par votre numéro."
            );
            return;
        }

        const message =
            "Bonjour Le Gourmet, je souhaite commander : " + nomPlat;

        const url =
            "https://wa.me/" + numeroWhatsApp +
            "?text=" + encodeURIComponent(message);

        window.open(url, "_blank");
    }

    // Menu mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const ouvert = navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", ouvert);
        });

        navLinks.querySelectorAll("a").forEach(function (lien) {
            lien.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Année du footer
    const annee = document.getElementById("current-year");

    if (annee) {
        annee.textContent = new Date().getFullYear();
    }

    // Affichage initial
    filtrerPlats();

});

