import { OEElement } from 'oe-test-agent';

export abstract class CrudEms2 {
  protected window!: OEElement;

  /**
   * Define a instância do ```OEElement``` da tela de relatório.
   * @param window Instância da tela de relatório retornada pelo ```OE Test Agent```.
   */
  public setWindow(window: OEElement): void {
    this.window = window;
  }

  /**
   * Clica no botão de inclusão.
   */
  public add(): void {
    this.window.findElement('bt-add').choose();
  }

  /**
   * Clica no botão de cópia.
   */
  public copy(): void {
    this.window.findElement('bt-cop').choose();
  }

  /**
   * Clica no botão de exclusão.
   */
  public delete(): void {
    this.window.findElement('bt-del').choose();
  }

  /**
   * Clica no botão de modificação.
   */
  public modify(): void {
    this.window.findElement('bt-mod').choose();
  }

  /**
   * Clica no botão de salvar as alterações.
   */
  public save(): void {
    this.window.findElement('bt-sav').choose();
  }

  /**
   * Clica no botão de cancelar as alterações.
   */
  public cancel(): void {
    this.window.findElement('bt-can').choose();
  }

  /**
   * Clica no botão de desfazer as alterações.
   */
  public undo(): void {
    this.window.findElement('bt-und').choose();
  }

  /**
   * Clica no botão para navegar até o primeiro registro.
   */
  public firstItem(): void {
    this.window.findElement('bt-fir').choose();
  }

  /**
   * Executa a operação de Ocorrência Anterior.
   */
  public previousItem(): void {
    this.window.findElement('bt-pre').choose();
  }

  /**
   * Clica no botão para navegar até o próximo registro.
   */
  public nextItem(): void {
    this.window.findElement('bt-nex').choose();
  }

  /**
   * Clica no botão para navegar até o próximo registro.
   */
  public lastItem(): void {
    this.window.findElement('bt-las').choose();
  }

  /**
   * Clica no botão de pesquisa.
   */
  public searchItem(): void {
    this.window.findElement('bt-sea').choose();
  }

  /**
   * Clica no botão de Vá Para.
   */
  public goTo(): void {
    this.window.findElement('bt-go').choose();
  }

  /**
   * Clica no botão de sair.
   */
  public exit(): void {
    this.window.findElement('bt-exi').choose();
  }

  /**
   * Clica no botão de ajuda.
   */
  public help(): void {
    this.window.findElement('bt-hel').choose();
  }

  /**
   * Clica no botão de relatórios.
   */
  public reports(): void {
    this.window.findElement('bt-pri').choose();
  }

  /**
   * Clica no botão de consultas.
   */
  public queries(): void {
    this.window.findElement('bt-joi').choose();
  }
}
