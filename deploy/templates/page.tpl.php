<header>
  <?php if ($page['header']): ?>
      <?php print render($page['header']); ?>
  <?php endif; ?>
  
  <?php if (!empty($primary_nav)): ?>
    <?php print render($primary_nav) ?>
  <?php endif ?>
</header>
 
<div class="container">

  <?php print render($title_prefix); ?>

  <?php if ($title): ?>
    <h1 class="title" id="page-title">
      <?php print $title; ?>
    </h1>
  <?php endif; ?>

  <?php print render($title_suffix); ?>

  <?php if ($tabs): ?>
    <div class="tabs">
      <?php print render($tabs); ?>
    </div>
  <?php endif; ?>

  <?php print render($page['help']); ?>
  
  <?php if ($action_links): ?>
    <ul class="action-links">
      <?php print render($action_links); ?>
    </ul>
  <?php endif; ?>
  
  <?php if ($page['main']): ?>
      <?php print render($page['main']); ?>
  <?php endif; ?>

</div>

<?php if ($messages): ?>
  <div id="messages"><div class="section clearfix">
    <?php print $messages; ?>
  </div></div> <!-- /.section, /#messages -->
<?php endif; ?>
 
<footer>
  <?php if ($page['footer']): ?>
      <?php print render($page['footer']); ?>
  <?php endif; ?>
</footer>