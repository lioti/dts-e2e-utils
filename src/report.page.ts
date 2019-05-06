import { OEElement } from 'oe-test-agent';

enum Destination {
  PRINTER = 1,
  FILE = 2,
  TERMINAL = 3
}

enum Mode {
  ONLINE = 1,
  BATCH = 2
}

enum Columns {
  COLUMNS_80 = 1,
  COLUMNS_132 = 2
}

export abstract class Report {
  protected window!: OEElement;

  public static readonly Destination = Destination;
  public static readonly Mode = Mode;
  public static readonly Columns = Columns;

  /**
   * Define a instância do ```OEElement``` da tela de relatório.
   * @param window Instância da tela de relatório retornada pelo ```OE Test Agent```
   */
  public setWindow(window: OEElement): void {
    this.window = window;
  }

  /**
   * Seleciona a aba de "Seleção".
   */
  public selectTab(): void {
    this.window.findElement('im-pg-sel').choose();
  }

  /**
   * Seleciona a aba de "Parâmetros".
   */
  public parametersTab(): void {
    this.window.findElement('im-pg-par').choose();
  }

  /**
   * Seleciona a aba de "Impressão".
   */
  public printerTab(): void {
    this.window.findElement('im-pg-imp').choose();
  }

  /**
   * Define o valor do campo de destino de emissão do relatório.
   * @param destination Valor do destino de emissão.
   */
  public setReportDestination(destination: Destination) {
    this.window.findElement('rs-destino').select(destination);
  }

  /**
   * Define o valor do campo de destino de emissão do relatório.
   *
   * @deprecated Substituir pelo método ```setReportDestination```.
   * @param destination Destino de emissão.
   */
  public setReportTarget(destination: Destination): void {
    this.setReportDestination(destination);
  }

  /**
   * Define o valor do campo de modo de execução do relatório.
   * @param mode Modo de execução.
   */
  public setExecutionMode(mode: Mode): void {
    this.window.findElement('rs-execucao').select(mode);
  }

  /**
   * Define o valor dos campos de parâmetros de impressão.
   *
   * @param print ```true``` marca impressão da página de parâmetros.
   * @param columns Número de colunas do relatório.
   */
  public setParametersPage(print: boolean, columns: Columns): void {
    this.window.findElement('tg-parametro').check(print);
    this.window.findElement('rs-formato').select(columns);
  }

  /**
   * Clica no botão de seleção de impressora.
   **/
  public selectPrinter(): void {
    this.window.findElement('bt-config-impr').choose();
  }

  /**
   * Clica no botão de seleção de arquivo.
   **/
  public selectFile(): void {
    this.window.findElement('bt-arquivo').choose();
  }

  /**
   * Clica no botão de executar relatório.
   **/
  public execute(): void {
    this.window.findElement('bt-executar').choose();
  }

  /**
   * Clica no botão de sair.
   **/
  public exit(): void {
    this.window.findElement('bt-cancelar').choose();
  }

  /**
   * Clica no botão de ajuda.
   **/
  public help(): void {
    this.window.findElement('bt-ajuda').choose();
  }
}
