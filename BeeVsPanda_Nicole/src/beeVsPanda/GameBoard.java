package beeVsPanda;

import backend.decorador.Principal.GestorDecorador;
import backend.fabricaAbstracta.Principal.GestorCreacional;
import backend.observador.Principal.GestorObservador;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.Timer;
import java.util.TimerTask;

public class GameBoard extends JPanel implements KeyListener {

    private static final long serialVersionUID = 3864575493189354872L;
    private Shooter background1 = new Shooter(0, 0, "images//BackGrounds//backGround1.png");
    private Shooter background2 = new Shooter(1000, 0, "images//BackGrounds//backGround1.png");

    Shooter shooter;
    private int shooterCount = 1; //For Animated Shooter
    boolean isCollision = false;
    boolean isStart = false;

    Bee[] bee = new Bee[6];
    PowerUps[] power = new PowerUps[4];
    Bullet[] bullets = new Bullet[100];
    int bulletCount = 0;
    static int score = 0;
    public GestorCreacional gestorCreacional = new GestorCreacional();
    public GestorDecorador gestorDecorador = new GestorDecorador();
    public GestorObservador gestorObservador = new GestorObservador();

    private int life = 3;
    public boolean loser = false;
    public int vel = 0;
    public int s = -3;


    public GameBoard() {
        super();
        super.addKeyListener(this);
        super.setFocusable(true);
        shooter = new Shooter(5, 255, null);


        int xBee = 1050, yBee = 23;
        for (int i = 0; i < bee.length; i++) {
            bee[i] = new Bee(xBee, yBee, "images//Bee//Bee1.png", true);

            yBee = yBee + 80;

        }
        int xPower = 1050, yPower = 23;
        for (int i = 0; i < power.length; i++) {
            power[i] = new PowerUps(xPower, yPower, "images//Gasolina//" + i + ".png", true);
            yPower = yPower + 80;

        }

        for (int i = 0; i < bullets.length; i++) {
            bullets[i] = new Bullet(-100, -316, "images//Bullets//BulletOfShooter.png");

        }

        for (int i = 0; i < bee.length; i++) {

            BeeMover bm = new BeeMover(bee[i], this, shooter);

            bm.start();

        }

        for (int i = 0; i < power.length; i++) {
            PoweUpMover bm2 = new PoweUpMover(power[i], this, shooter);
            bm2.start();
        }
        java.util.Timer timer = new Timer();
        timer.scheduleAtFixedRate(eliminarSeg, 0, 1000);

    }

    //for life of Shooter
    public int getLife() {
        return life;
    }

    public void setLife(int life) {
        this.life = life;
    }

    TimerTask eliminarSeg = new TimerTask() {
        public void run() {
            s++;
        }
    };

    public void paint(Graphics g) {

        background1.draw(g);
        background2.draw(g);
        this.scrollBackground(); //for infinite BackGround

        if(s>=45){
            setLife(0);
        }

        if (isStart) {
            //shooter.draw(g); //Non-animated Shooter

            if (isCollision == false) {
                shooter.setImagePath("images//Shooter//" + shooterCount + ".png");
                shooterCount++;
            }
            try {
                Thread.sleep(10); //speed is 10

            } catch (Exception e) {

            }
            super.repaint();

            if (life != 5 && life !=0)
                shooter.draw(g);

            if (shooterCount == 7) {
                shooterCount = 1;
            }


            for (int i = 0; i < bee.length; i++) {
                if (loser)
                    bee[i].setImagePath("images//Bee//Bee2.png");
                if (bee[i].isAlive() == true)
                    bee[i].draw(g);
            }

            for (int i = 0; i < power.length; i++) {

                if (power[i].isAlive() == true && life != 5)
                    power[i].draw(g);
            }


            bullets[bulletCount].draw(g);

            for (int i = 0; i < bullets.length; i++) {
                if (life != 5 && life !=0)
                    bullets[i].draw(g);
            }


            if (isCollision == false && life != 0) {
                Font f = new Font("Sherif", Font.BOLD, 24);
                g.setColor(Color.BLACK);
                g.setFont(f);
                g.drawString("SCORE : " + score, 315, 600);
            }

            if (life != 0) {
                Font f = new Font("Serif", Font.BOLD, 24);

                if (life == 3) {
                    g.setColor(Color.yellow);
                    g.setFont(f);
                    g.drawString("Lives Remaining : " + life, 485, 600);
                    g.drawString("Timer : " + s, 750, 600);
                } else if (life == 2) {
                    g.setColor(Color.orange);
                    g.setFont(f);
                    g.drawString("Lives Remaining : " + life, 485, 600);
                    g.drawString("Timer : " + s, 750, 600);
                } else if (life == 4) {
                    g.setColor(Color.green);
                    g.setFont(f);
                    g.drawString("Lives Remaining : " + life, 485, 600);
                    g.drawString("Timer : " + s, 750, 600);
                } else if (life == 1) {
                    g.setColor(Color.RED);
                    g.setFont(f);
                    g.drawString("Life Remaining : " + life, 485, 600);
                    g.drawString("Timer : " + s, 750, 600);
                }
            }
        } else {
            Font f1 = new Font("Serif", Font.BOLD, 55);
            g.setColor(Color.white);
            g.setFont(f1);
            g.drawString("Examen Patrones 2", 250, 200);
            g.drawString("Profesor: Erick Brenes", 210, 250);
            g.drawString("Por: Ureña Miranda Braylie Nicole", 100, 300);

            Font f2 = new Font("Serif", Font.BOLD, 24);
            g.setColor(Color.LIGHT_GRAY);
            g.setFont(f2);
            g.drawString("Presione alguna tecla....", 390, 400);
        }

        if (life == 0) {
            Font f1 = new Font("Serif", Font.BOLD, 55);
            g.setColor(Color.BLACK);
            g.setFont(f1);
            g.drawString("Game Over!", 360, 300);
            g.drawString("Play Again", 370, 350);

            Font f2 = new Font("Serif", Font.BOLD, 24);
            g.setColor(Color.BLUE);
            g.setFont(f2);
            g.drawString("TOTAL SCORE : " + score, 390, 400);

        }

        if (life == 5) {
            Font f1 = new Font("Serif", Font.BOLD, 55);
            g.setColor(Color.white);
            g.setFont(f1);
            g.drawString("Winner!", 390, 300);

            Font f2 = new Font("Serif", Font.BOLD, 24);
            g.setColor(Color.lightGray);
            g.setFont(f2);
            g.drawString("TOTAL SCORE : " + score, 390, 400);

        }

    }


    public void scrollBackground() {
        if (background1.getX() > -1000) {
            background1.setX(background1.getX() - 2);
        } else {
            background1.setX(1000);
        }
        if (background2.getX() > -1000) {
            background2.setX(background2.getX() - 2);
        } else {
            background2.setX(1000);
        }
        try {
            Thread.sleep(10);

        } catch (Exception e) {

        }
        super.repaint();
    }


    public void keyPressed(KeyEvent e) {
        isStart = true;
        if (e.getKeyCode() == KeyEvent.VK_LEFT) {

            if (shooter.getX() > 0)
                shooter.setX(shooter.getX() - 4);
        } else if (e.getKeyCode() == KeyEvent.VK_RIGHT) {

            if (shooter.getX() < 760)
                shooter.setX(shooter.getX() + 4);
        } else if (e.getKeyCode() == KeyEvent.VK_UP) {

            if (shooter.getY() > 7)
                shooter.setY(shooter.getY() - 4);
        } else if (e.getKeyCode() == KeyEvent.VK_DOWN) {

            if (shooter.getY() < 440)
                shooter.setY(shooter.getY() + 4);
        } else if (e.getKeyCode() == KeyEvent.VK_SPACE) {

            bullets[bulletCount].setX(shooter.getX() + 100);
            bullets[bulletCount].setY(shooter.getY() + 63);
            GameSound.bulletFiredSound();
            BulletFiring fire = new BulletFiring(this, bee, bullets[bulletCount]);

            fire.start();
            bulletCount++;

            if (bulletCount == 100)
                bulletCount = 0;

        }

        super.repaint();

    }


    public void keyReleased(KeyEvent e) {


    }

    public void keyTyped(KeyEvent e) {


    }

}
