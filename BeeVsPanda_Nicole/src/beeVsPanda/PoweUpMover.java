package beeVsPanda;

import java.awt.*;

public class PoweUpMover extends Thread {
    private Shooter shooter;
    private PowerUps powerUps;
    private GameBoard gb;

    public PoweUpMover(PowerUps powerUps, GameBoard gb, Shooter shooter) {
        this.shooter = shooter;
        this.gb = gb;
        this.powerUps = powerUps;
    }

    public void run() {

        while (powerUps.getX() > -100) {
            powerUps.setX(powerUps.getX() - 1);
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {

                e.printStackTrace();
            }
            gb.repaint();

            checkCollision();
        }
        powerUps.setX(1100);    //setting getX again to 1100
        run();    //starting from the beginning
    }

    public void checkCollision() {

        Rectangle shooterRect = new Rectangle(shooter.getX(), shooter.getY(), 105, 120);

        boolean isHit = false;

        Rectangle beeRect = new Rectangle(powerUps.getX(), powerUps.getY(), 70, 60); //105 because it'll be nearer when colliding

        if (shooterRect.intersects(beeRect) == true) {
            isHit = true;

            String decorador = "";
            if (powerUps.getImagePath().equals("images//Gasolina//1.png"))
                decorador = gb.gestorDecorador.tipoGasolina("Chevron");
            if (powerUps.getImagePath().equals("images//Gasolina//2.png"))
                decorador = gb.gestorDecorador.tipoGasolina("Esso");
            if (powerUps.getImagePath().equals("images//Gasolina//3.png"))
                decorador = gb.gestorDecorador.tipoGasolina("Exxon");

            switch (decorador) {
                case "Vida":
                    if (gb.getLife() < 4)
                        gb.setLife(gb.getLife() + 1);
                    break;
                case "Alta":
                    gb.vel = 1;
                    break;
                case "Baja":
                    gb.vel = 2;
                    break;
            }

            powerUps.setImagePath("images//BeeBlast//blast1.png"); //When bullet hits a bee, it shows a blast
            try {
                Thread.sleep(100);
            } catch (Exception e) {
                //exception handling
            }

            String tipo = "";
            switch ((int) ((Math.random() * 3) + 1)) {
                case 1://
                    tipo = gb.gestorCreacional.procesarFuncion(1);
                    break;
                case 2://
                    tipo = gb.gestorCreacional.procesarFuncion(2);
                    break;
                case 3://
                    tipo = gb.gestorCreacional.procesarFuncion(3);
                    break;
            }

            System.out.println(tipo);

            if (tipo.equals("Chevron"))
                powerUps.setImagePath("images//Gasolina//1.png"); //After Blast setting the image again
            if (tipo.equals("Esso"))
                powerUps.setImagePath("images//Gasolina//2.png"); //After Blast setting the image again
            if (tipo.equals("Exxon"))
                powerUps.setImagePath("images//Gasolina//3.png"); //After Blast setting the image again

            powerUps.setX(1100); //Setting it again for coming continuously

        }
        if (isHit == true)
            GameSound.Shooter_Bee_Collide_Sound();
    }
}
